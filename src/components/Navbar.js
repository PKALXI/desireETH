import React, { useState } from "react";
import { ConnectButton } from "@web3uikit/web3";
import { signInWithNearWallet,signOutNearWallet } from "../near-api";
import './Navbar.css'
const NavBar = ({image}) => {
  return (
    <div className="navbar">
        <div className = "connect__button">
          <ConnectButton />
<<<<<<< Updated upstream
          <button className = 'near__connect__button'onClick={signInWithNearWallet}>NEAR Sign-in</button>
=======
          <button className = 'near__connect__button'onClick={signInWithNearWallet}>SIGN IN WITH NEAR</button>
>>>>>>> Stashed changes
        </div>
    </div>
  );
};

export default NavBar;
