import React from 'react';
import "./cart.css";
import { useContext } from "react";
import store from "../context/storeContext";
import ProductsInCart from './productsInCart';

const Cart = () => {
    const cart = useContext(store).cart;

    const getTotal = () => {
        let total = 0;
        for (let i = 0; i<cart.length; i++) {
            let prod = cart[i];
            total += prod.price
        }
        return "$ " + total.toFixed(2);
    }


    return (
    <div className ="cart-page">
        <h2>You currently have {cart.length} shoes in your cart! </h2>
        
        <div className="cart-content">
            <div className="cart-products">
                { cart.map((prod) => (
                    <ProductsInCart key={prod._id} info= {prod}></ProductsInCart>
                )) }
            </div>
        

        <div className="side-panel">
            <h2>Subtotal</h2>
            <h5>{getTotal()}</h5>
            <hr />
            <button className="btn btn-sm btn-primary"><i className="bi bi-cart3"></i>Checkout!</button>
            </div>
        </div>
    </div>

    );

};

export default Cart;