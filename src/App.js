import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar';
import Footer from './components/footer';
import Catalog from './components/catalog';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import About from './components/about';
import Todo from './components/todo';



function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1>Welcome to the soleshop</h1>
      <Catalog></Catalog>

      <About></About>
      <Todo></Todo>
      <Footer></Footer>
    </div>
  );
}

export default App;
