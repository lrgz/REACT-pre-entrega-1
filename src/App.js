import logo from './logo.svg';
import './App.css';
import Navbar from './components/header/Navbar';
import ItemListContainer from './components/main/ItemListContainer';


function App() {

  const msg= "Las mejores pizzas para hornear";

  return (
    <>
    <Navbar/>
   
    <ItemListContainer msg={msg}/>
  
    

    </>
  );
}

export default App;
