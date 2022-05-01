import React from 'react'
import "./admin.css";
import { useState } from 'react';


const Admin = () => {
    const [product, setProduct] = useState({});
    const [coupon, setCoupon] = useState({})
    const [errorVisible, setErrorVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    
    const handleTextChange = (e) => {
        let copy = {...product};
        copy[e.target.name] = e.target.value;

        setProduct(copy);
    };

    const handleCoupon = (e) => {
        let copy = {...coupon}
        copy[e.target.name] = e.target.value;

        setCoupon(copy)
    };

    const showError = (text) => {
        setErrorMessage(text);
        setErrorVisible(true);
    }
    const saveProduct = () => {
                
        if(product.title.length < 5){
            showError ("Error, Title should have at least 5 characters.")
            return;
            
        }

        if(!product.category){
            showError("Error, Category should not be blank")
            return;
        }

        if(!product.image){
            showError("Image can not be empty")
            return;
        }

        let savedProduct = {...product};
        savedProduct.price = parseFloat(savedProduct.price)

        if(!savedProduct.price || savedProduct.price < 1){
            showError("Price must be greater than $1")
            return;
        }
        setErrorVisible(false)
        console.log(savedProduct)
  
    };

    const saveCoupon = () => {
        

        let savedCoupon = {...coupon};
        savedCoupon.discount = parseFloat(savedCoupon.discount)

        //send coupon to Server

        //validation
        //discount cant be greater than 35%
        if(!savedCoupon.discount || savedCoupon.discount > 35) {
            showError("Error, discount can not be more than 35%")
            return;
        }
        //code should have at least 5 chars
        if(savedCoupon.coupon.length < 5) {
            showError("Coupon code must contain 5 characters.")
            return;
        }
        setErrorVisible (false)
        console.log("Saving Coupon")
        console.log(coupon)
    };

    return (
        <div className="admin">
            { errorVisible ? <div className='alert alert-danger'>{errorMessage}</div> : null}
            <div className="section-container">
                <section className='sec-products'>
                    <h2>Manage Products</h2>
                    
                        <div className='my-control'>
                        <label>Shoe Name: </label>
                        <input onChange = {handleTextChange} name="title" type ="text"></input>
                        </div>
                        <div className='my-control'>
                        <label>Category: </label>
                        <input onChange={handleTextChange} name="category" type ="text"></input>
                        </div>
                        <div className='my-control'>
                        <label>Price: </label>
                        <input onChange={handleTextChange} name="price" type ="number"></input>
                        </div>
                        <div className='my-control'>
                        <label>Image: </label>
                        <input onChange={handleTextChange} name="image" type ="text"></input>
                        </div>
                        <div className='my-control'>
                        <button onClick={saveProduct} type="button" class="btn btn-danger">Register Product</button>
                        </div>
                      
                    
                </section>
                <section className='sec-coupons'>
                    <h2>Manage Coupons</h2>
                    <div className='my-control'>
                        <label>Coupon Code: </label>
                        <input onChange = {handleCoupon} name="coupon" type ="text"></input>
                        </div>
                        <div className='my-control'>
                        <label>Discount: </label>
                        <input onChange={handleCoupon} name="discount" type ="number"></input>
                        </div>
                        <div className='my-control'>
                        <button onClick={saveCoupon} type="button" class="btn btn-danger">Save Coupon</button>
                        </div>
                    
                </section>
            </div>

        </div>
    );

};

export default Admin;