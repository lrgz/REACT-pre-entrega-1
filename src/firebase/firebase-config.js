import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  getDoc,
  doc,
  writeBatch,
  addDoc,
  Timestamp,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const getProducts = async (categoryId) => {
  const productsCollectionRef = categoryId
    ? query(collection(db, "products"), where("category", "==", categoryId))
    : collection(db, "products");
  const dataSnapshot = await getDocs(productsCollectionRef);
  return dataSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export const getProductById = async (productId) => {
  const dataSnapshot = await getDoc(doc(db, "products", productId));
  return dataSnapshot.data() && { id: dataSnapshot.id, ...dataSnapshot.data() };
};

export const orderValitation = async (
  buyer,
  cart,
  grandTotal,
  clearCart,
  setModal
) => {
  const order = {
    buyer: buyer,
    items: cart,
    date: Timestamp.fromDate(new Date()),
    total: grandTotal,
  };

  const batch = writeBatch(db);
  const outOfStock = [];

  const checkStock = async () => {
    for (let item of order.items) {
      const response = await getDoc(doc(db, "products", item.id));
      if (response.data().stock >= item.quantity) {
        batch.update(doc(db, "products", item.id), {
          stock: response.data().stock - item.quantity,
        });
      } else {
        outOfStock.push({ id: response.id, ...response.data() });
      }
    }
  };

  function orderCommit() {
    if (outOfStock.length === 0) {
      addDoc(collection(db, "orders"), order).then(({ id }) => {
        batch.commit().then(() => {
          clearCart();
          return setModal("Compra exitosa", `EL código de tu compra es: ${id}`);
        });
      });
    } else {
      outOfStock.map((item) => {
        let errorStock = `- ${item.name} - no tiene stock suficiente, nos quedan ${item.stock} unidades`;
        return setModal("Te pedimos disculpas", errorStock);
      });
      //);
    }
  }
  return await checkStock().then(() => orderCommit());
};
