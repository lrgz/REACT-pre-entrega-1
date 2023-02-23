import logo from './logo.svg';
import './App.css';
import Navbar from './components/header/Navbar';
import ItemListContainer from './components/main/ItemListContainer';
import {BrowserRouter,Routes,Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';


function App() {

  const msg= "Las mejores pizzas para hornear";

  return (
    <BrowserRouter>
      <Navbar/>   
      <Routes>
          <Route path="/" element={<ItemListContainer msg={msg}/> }/> 
          <Route path="/categoria/:categoria" element={<ItemListContainer msg={msg}/> }/> 
          <Route path="/product/:id" element={<ItemListContainer msg={msg}/> }/> 
          <Route path="/cart" element={<Cart/>}/>           
      </Routes>     
    </BrowserRouter>
  );
};

export default App;


/*<ItemListContainer msg={msg}/> 
<ItemDeatilContainer /> 
<Route path="*" element={<Error404/>}/> 

*/ 

