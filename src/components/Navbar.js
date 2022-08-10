import React, { useState } from "react";
import { ConnectButton } from "@web3uikit/web3";
import { signInWithNearWallet,signOutNearWallet } from "../near-api";
import './Navbar.css'
const NavBar = ({image}) => {
  return (
    <div className="navbar">
        <div className = "connect__button">
          <ConnectButton />
          <button className = 'near__connect__button'onClick={signInWithNearWallet}>NEAR Sign-in</button>
        </div>
    </div>
  );
};

export default NavBar;
