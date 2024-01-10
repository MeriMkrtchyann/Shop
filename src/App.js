
import { Route, Routes, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react';

import Layout from "./Components/Layout"
import Login from "./Pages/Login/Login.jsx"
import Registration from "./Pages/Registration/Registration.jsx"
import All from "./Components/Main/All/All"
import NotFoundPage from "./Components/Main/NotFoundPage/NotFoundPage"


function App() {
  const storedLoggedInStatus = localStorage.getItem("isLoggedIn");
  const [cart, setCart] = useState([]);
  const [isLoggedIn , setIsLoggedIn] = useState(storedLoggedInStatus === "true")
  
  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn.toString());
  }, [isLoggedIn]);

return (
  <>
    <Routes>
      <Route path="login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
      <Route path="registration" element={<Registration />} />
    </Routes>
    <Routes>
      <Route path="/" element={ isLoggedIn ? <Layout cart={cart} setCart={setCart} onLoginOut={() => setIsLoggedIn(false)}/> : <Navigate to="/login" />}>
        <Route index element={<All category="" cart={cart} setCart={setCart} />} />
        <Route path="/mens" element={<All category="men's clothing" cart={cart} setCart={setCart} />} />
        <Route path="/womens" element={<All category="women's clothing" cart={cart} setCart={setCart} />} />
        <Route path="/jewelery" element={<All category="jewelery" cart={cart} setCart={setCart} />} />
        <Route path="/electronics" element={<All category="electronics" cart={cart} setCart={setCart} />} />
      </Route>
    </Routes>
  </>
);
}

export default App;