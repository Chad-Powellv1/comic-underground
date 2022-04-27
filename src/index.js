import Register from './component/user/Register';
import Profile from './component/user/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './component/user/Login';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import React from 'react';
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />}>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='profile' element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

