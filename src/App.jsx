import './App.css'
import React from "react";
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import CreateAccountForm from './components/CreateAccount';
import Account from './components/Account';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<CreateAccountForm />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Router>
  );
}

export default App;