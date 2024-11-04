import React from 'react';
import { BrowserRouter as Routes, Router, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={Home} />
          <Route path="/signup" element={Signup} />
          <Route Path="/login" element={Login}/>
        </Routes>
      </Router>
    </>
  );
}
export default App;