import React from 'react'
import "./home.css";
import {Link} from 'react-router-dom'
import { useContext } from "react";
import store from "../context/storeContext";

const Home = () => {
    const user = useContext(store).user;


    return (
        <div className="home">
            <div className="home-welcome">
                <div className="home-user">
                    <h6>Welcome back to soleshop {user.email} </h6>
                </div>
            
            <div className="home-link">
                <Link className="btn btn-med btn-danger" to="/catalog">
                    Check out our Catalog!
                </Link>
            </div>
            </div>

            <div className="image-container">
                <div className="home-img">
                    <img src="/images/homepage.jpeg"/>
                </div>
            </div>
        </div>
    );

};

export default Home;