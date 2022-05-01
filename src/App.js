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
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Admin from './components/admin';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar></NavBar>
      
      <Routes>
      <Route path ="/home" exact element={<Home />}></Route>
        <Route path ="/catalog" exact element={<Catalog />}></Route>
        <Route path="/about" exact element={<About />}></Route>
        <Route path="/shoppinglist" exact element={<Todo />}></Route>
        <Route path="/admin" exact element={<Admin />}></Route>

      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
