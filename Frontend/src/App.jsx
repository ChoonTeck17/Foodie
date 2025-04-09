// import React, { useState } from 'react';
// import Navbar from './components/Navbar';
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import Home from './pages/Home';
// import Cart from './pages/Cart';
// import Order from './pages/Order';
// import Footer from './components/Footer';
// import Login from './components/Login';
// import DoneOrder from './pages/DoneOrder';
// import Menu from './pages/Menu';
// import Faq from './pages/Faq';

// const App = () => {
//   const [showLogin, setShowLogin] = useState(false); // This state controls the login modal visibility
//   const location = useLocation();

//   return (
//     <>
//       <div className='app'>

//       {/* Only show Login modal if showLogin is true */}
//       {showLogin && <Login setShowLogin={setShowLogin} />} 

//         {/* Pass setShowLogin to Navbar */}
//         <Navbar setShowLogin={setShowLogin} />
        
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/Cart' element={<Cart />} />
//           <Route path='/Order' element={<Order />} />
//           <Route path='/DoneOrder' element={<DoneOrder />} />
//           <Route path='/Menu' element={<Menu />} />
//           <Route path='/Faq' element={<Faq/>} />

//         </Routes>
//       </div>

//       <Footer />
//     </>
//   );
// }

// export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Remove useLocation if not needed
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Order from './pages/Order';
import Footer from './components/Footer';
import Login from './components/Login';
import DoneOrder from './pages/DoneOrder';
import Menu from './pages/Menu';
import Faq from './pages/Faq';

// Optional: Add a NotFound component for invalid routes
const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
};

const App = () => {
  const [showLogin, setShowLogin] = useState(false); // State to control login modal visibility

  return (
    <Router>
      <div className="app">
        {/* Show Login modal if showLogin is true */}
        {showLogin && <Login setShowLogin={setShowLogin} />}

        {/* Pass setShowLogin to Navbar */}
        <Navbar setShowLogin={setShowLogin} />

        <Routes>
          <Route path="/" element={<Home />} /> {/* Root route renders Home.jsx */}
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Order" element={<Order />} />
          <Route path="/DoneOrder" element={<DoneOrder />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Faq" element={<Faq />} />
          {/* Fallback route for invalid URLs */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;