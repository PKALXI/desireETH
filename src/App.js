import './App.css';
import Body from './components/Body';
import NavBar from './components/Navbar';
import React from 'react';
import { useMoralis } from 'react-moralis';

export default function App() {
  const { authenticate, isAuthenticated, user } = useMoralis();

  return (
    <div className="App">
      <NavBar 
        image = '../assets/whitelogo.png'
        alt = 'logo'
      />
      <Body/>
    </div>
  )
}
