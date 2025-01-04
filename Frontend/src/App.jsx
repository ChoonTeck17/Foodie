import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Order from './pages/Order/Order';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import DoneOrder from './pages/DoneOrder/DoneOrder';
import Menu from './pages/Menu/Menu';
import Faq from './pages/Faq/Faq';

const App = () => {
  const [showLogin, setShowLogin] = useState(false); // This state controls the login modal visibility
  const location = useLocation();

  return (
    <>
      <div className='app'>

      {/* Only show Login modal if showLogin is true */}
      {showLogin && <Login setShowLogin={setShowLogin} />} 

        {/* Pass setShowLogin to Navbar */}
        <Navbar setShowLogin={setShowLogin} />
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Order' element={<Order />} />
          <Route path='/DoneOrder' element={<DoneOrder />} />
          <Route path='/Menu' element={<Menu />} />
          <Route path='/Faq' element={<Faq/>} />

        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
