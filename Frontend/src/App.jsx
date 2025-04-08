import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Order from './pages/Order';
import DoneOrder from './pages/DoneOrder';
import Menu from './pages/Menu';
import Faq from './pages/Faq';
import Footer from './components/Footer';
import Login from './components/Login';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <Router>
      <div className='app'>
        {/* Only show Login modal if showLogin is true */}
        {showLogin && <Login setShowLogin={setShowLogin} />}
        
        <Navbar setShowLogin={setShowLogin} />
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Order' element={<Order />} />
          <Route path='/DoneOrder' element={<DoneOrder />} />
          <Route path='/Menu' element={<Menu />} />
          <Route path='/Faq' element={<Faq />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
