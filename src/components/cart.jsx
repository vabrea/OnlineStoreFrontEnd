import React from 'react';
import "./cart.css";
import { useContext } from "react";
import store from "../context/storeContext";

const Cart = () => {
    const cart = useContext(store).cart;


    return (
        <div className ="cart-page">
            <h2>You currently have {cart.length} shoes in your cart!</h2>
            

        </div>
    );

};

export default Cart;