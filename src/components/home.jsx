import React from 'react'
import "./home.css";
import {Link} from 'react-router-dom'
import { useContext } from "react";
import store from "../context/storeContext";

const Home = () => {
    const user = useContext(store).user;


    return (
        <div className="home">

            <h6>Welcome back {user.email} </h6>
            <h1>Welcome to the soleshop</h1>
        

        
            <Link className="btn btn-lg btn primary" to="/catalog">
                Check out our Catalog!
            </Link>
        </div>
    );

};

export default Home;