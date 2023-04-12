import "./App.css";
import { Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartContainer from "./components/CartContainer";
function App() {
  return (
    <CartContextProvider>
      <div className="appContainer">
        <header className="header">
          <NavBar />
        </header>
        <main className="main">
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartContainer />} />
          </Routes>
        </main>
      </div>
    </CartContextProvider>
  );
}

export default App;
