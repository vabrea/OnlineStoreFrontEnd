import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar';
import Footer from './components/footer';
import Catalog from './components/catalog';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1>Hello World from React!</h1>
      <Catalog></Catalog>

      <Footer></Footer>
    </div>
  );
}

export default App;
