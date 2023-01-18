
import './App.css'
import Sidebar from './components/Sibebar'
import * as React from 'react';
import { Routes, Route, Outlet, NavLink } from 'react-router-dom';

import Home from './components/Home';
import Hooks from './pages/Hooks';
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route index element={<Home />} />
          <Route  path="/hooks" element={<Hooks/>} exact />
        </Route>
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>

    </>


  )
}

export default App
