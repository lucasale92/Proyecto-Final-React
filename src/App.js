import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import ItemListContainer from './components/containers/ItemListContainer';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from './components/NavBar';
import MyProvider from './context/CartContext';
import Contacto from './components/Contacto';
import {Animated} from 'react-animated-css';

export default function App() {
  return ( <>
      <BrowserRouter>      
      <MyProvider>
      <NavBar/>     
      <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
      <h1 className="App"> Pastas Lau Estilo Casero</h1>        
      </Animated>   
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/productos" element={<ItemListContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/producto/:id" element={<ItemDetailContainer />} />
        <Route path="checkout" element={<Checkout/>} />
        <Route path="/contacto" element={<Contacto/>}/>
        </Routes>
      <Footer />
      </MyProvider>
      </BrowserRouter>

    
    
    </>
  );
}

