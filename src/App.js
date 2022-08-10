import './App.css';
import Body from './components/Body';
import NavBar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <NavBar 
        image = '../assets/whitelogo.png'
        alt = 'logo'
      />
      <Body/>
    </div>
  );
}

export default App;
