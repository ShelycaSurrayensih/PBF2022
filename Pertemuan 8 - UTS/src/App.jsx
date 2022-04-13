import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Microwave from "./container/Microwave/Microwave";
import Keranjang from "./container/Microwave/Keranjang";
import microwave_img from './Laptop.jpg';
// import samsung1 from './samsung1.png'
import foto from './Foto.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

function App() {
  return (
    <Router>
      <div>

        <ul className="menu">
          {/* <img src="https://media.wired.com/photos/5ed7d5b17f41315c30f0d5d1/master/w_2611,h_512,c_limit/5017.png" alt="Gambar" /> */}
          <p>GOLAPTOP</p>
          <li>
            <Link to="/about" ><span>About</span></Link>
          </li>
          <li>
            <Link to="/keranjang" ><span>Cart</span></Link>
          </li>
          <li>
            <Link to="/list-product" ><span>List Product</span></Link>
          </li>
          <li>
            <Link to="/" ><span>Home</span></Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/list-product">
            <Products />
          </Route>
          <Route path="/keranjang">
            <Keranjangs />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="carousel-microwave">
      {/* <img src={apple} id="img-bg" /> */}
      <div className="header">
      <p className="header-t1 h-t-1">Welcome to GOLAPTOP</p>

        <div className="h-t-2">
          <p className="header-t2">We have 5000+ Review and our customers trust on our</p>
          <p className="header-t2">Furniture and Quality Product</p>
        </div>

        <button className="btn btn-sm btn-header-1">Buy Now</button>
        <button className="btn btn-sm btn-header-2">Explore</button>
      </div>
      <img id="img-microwave" src={microwave_img} alt="gambar"/>
    </div> 
  );
}

const About = () => {
  return (
  <div>
    <div className="About">
      {/* <center><h2>Biodata</h2></center> */}
      <img src={foto} alt="gambar" />
      {/* <div id="kotak" /> */}
      <div id="bio">
        <p id="p-1">Hello there!</p>
        <p id="p-2">My name is Shelyca Surrayensih</p>
        <p id="p-3">Nim <p id="p-3-2">1941720021</p></p>
        <p id="p-4">Kelas <p id="p-4-2">TI-3C</p></p>
      </div>
    </div>
    <p id="about-me">I am a student with a D4 Informatics Engineering study program. I belong to the class of 2019.</p>
  </div>
  );
}

function Products() {
  return (
    <div>
      <Microwave />
    </div>
  )
}

function Keranjangs() {
  return (
    <div>
      <Keranjang />
    </div>
  )
}

export default App;
