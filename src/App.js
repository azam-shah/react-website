import './App.css';
import Navbar from './Componenet/Navbar';  
import Home from './Componenet/Home';  
import About from './Componenet/About';  
import Signup from './Componenet/Signup';  
import Contact from './Componenet/Contact';  
import { Navigate, Route, Routes } from 'react-router-dom';
import Privateroute from './Componenet/Privateroute';  
import Login from './Componenet/Login';  
import Billing from './Componenet/Billing';  
import Remaining from './Componenet/Remaining';  
import Sellbox from './Componenet/Sellbox';  
import { WishlistProvider } from './context/WishlistContext';  
import Cart from './Componenet/Cart';  
import Wishlist from './Componenet/Wishlist';  
import { CartProvider } from './context/Cart_Context';  

function App() {
  const isLoggedIn = () => {
    return localStorage.getItem('authToken') !== null;
  };

  return (
    <WishlistProvider>
      <CartProvider>
        <div className="App">
          <Navbar />
          <hr />
          <Routes>
            <Route path='/Signup' element={isLoggedIn() ? <Navigate to="/Home" /> : <Signup />} />
            <Route path='/Login' element={isLoggedIn() ? <Navigate to="/Home" /> : <Login />} />
            <Route path='/Home' element={<Privateroute><Home /></Privateroute>} />
            <Route path='/Contact' element={<Privateroute><Contact /></Privateroute>} />
            <Route path='/About' element={<Privateroute><About /></Privateroute>} />
            <Route path='*' element={<Navigate to={isLoggedIn() ? "/Home" : "/Login"} />} />
            <Route path='/Billing' element={<Billing />} />
            <Route path="/Remaining" element={<Remaining />} />
            <Route path="/Sellbox" element={<Sellbox />} />
            <Route path='/Cart' element={<Cart />} />
            <Route path='/Wishlist' element={<Wishlist />} />
          </Routes>
        </div>
      </CartProvider>
    </WishlistProvider>
  );
}

export default App;
