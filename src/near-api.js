<<<<<<< Updated upstream
import { connect, keyStores, WalletConnection } from 'near-api-js'
import { parseNearAmount } from 'near-api-js/lib/utils/format'
import { getConfig } from './config'

const nearConfig = getConfig(process.env.NODE_ENV || 'development')

// Initialize contract and set global variables
export async function initContract() {
  // Initialize connection to the NEAR blockchain
=======
import { connect, Contract, keyStores, WalletConnection } from 'near-api-js';
import { getConfig } from './near-config';

const nearConfig = getConfig(process.env.NODE_ENV || 'development');

// Initialize contract & set global variables
export async function initContract() {
  // Initialize connection to the NEAR testnet
>>>>>>> Stashed changes
  const near = await connect(Object.assign({ deps: { keyStore: new keyStores.BrowserLocalStorageKeyStore() } }, nearConfig));

  // Initializing Wallet based Account. It can work with NEAR testnet wallet that
  // is hosted at https://wallet.testnet.near.org
  window.walletConnection = new WalletConnection(near);

<<<<<<< Updated upstream
  // Getting the Account ID. If signed-out, it's empty string
  window.accountId = window.walletConnection.getAccountId();
}

export function signInWithNearWallet() {
  // Allow the current app to make calls to the specified contract on the
  // user's behalf.
  // This works by creating a new access key for the user's account and storing
  // the private key in localStorage.
  window.walletConnection.requestSignIn(nearConfig.contractName);
=======
  // Getting the Account ID. If still unauthorized, it's just empty string
  window.accountId = window.walletConnection.getAccountId();

  // Initializing our contract APIs by contract name and configuration
  window.contract = await new Contract(window.walletConnection.account(), nearConfig.contractName, {
    // View methods are read only. They don't modify the state, but usually return some value.
    viewMethods: ['get_greeting'],
    // Change methods can modify the state. But you don't receive the returned value when called.
    changeMethods: ['set_greeting'],
  });
>>>>>>> Stashed changes
}

export function signOutNearWallet() {
  window.walletConnection.signOut();
  // reload page
  window.location.replace(window.location.origin + window.location.pathname);
}

<<<<<<< Updated upstream
/*
  Performs a view call to contract's `viewGreeting` method, to get data from the blockchain
*/
export async function viewBlockchainState() {
  let account = window.walletConnection.account();

  const currentState = await account.viewFunction(
    nearConfig.contractName,
    'viewGreeting',
    {},
  );

  return currentState;
}

/*
  Calls a contract method which will manipulate blockchain state.
*/
export async function callSmartContractFunction(messageArg) {
  let account = window.walletConnection.account();

  // Use near-api-js to perform a smart contract function call
  const result = await account.functionCall({
    contractId: nearConfig.contractName,
    methodName: 'setGreeting',
    args: {
      'message': messageArg
    },
    gas: '300000000000000',
  });

  return result;
}
=======
export function signInWithNearWallet() {
  console.log('works!');
  // Allow the current app to make calls to the specified contract on the
  // user's behalf.
  // This works by creating a new access key for the user's account and storing
  // the private key in localStorage.
  window.walletConnection.requestSignIn(nearConfig.contractName);
}

export async function setGreetingOnContract(message) {
  let response = await window.contract.set_greeting({
    args: { message: message }
  });
  return response;
}

export async function getGreetingFromContract() {
  let greeting = await window.contract.get_greeting();
  return greeting;
}
>>>>>>> Stashed changes
