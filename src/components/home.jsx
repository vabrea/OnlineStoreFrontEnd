import React from 'react'
import "./home.css";
import {Link} from 'react-router-dom'

const Home = () => {

    return (
        <div className="home">
            <h1>Welcome to the soleshop</h1>
        

        
            <Link className="btn btn-lg btn primary" to="/catalog">
                Check out our Catalog!
            </Link>
        </div>
    );

};

export default Home;