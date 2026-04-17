import { BrowserRouter , Routes , Route} from "react-router-dom";
import { useState } from "react";
import Navbar from "./Features/Navbar";
import ProductList from "./Features/ProductList";
import Cart from "./Features/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";


function App(){
  const [cart , setCart] =useState([]);
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <BrowserRouter>
      <Navbar cartCount={cart.length} />
      <Routes>
        <Route path="/" element={<ProductList addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
