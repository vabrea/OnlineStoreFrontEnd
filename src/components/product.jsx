import "./product.css"
import SizeSelect from "./sizeselect";

function Product(){
    return(
        <div className="product">
            <img src="/images/Dunk-UNC.jpg"></img>
            <h4>Nike Dunk UNC</h4>
            <p>Available only in Men's US sizes</p>
            <p>8.5 - 12.5</p>

            <label>$150.00</label>

            <SizeSelect></SizeSelect>

            <button className="btn btn-primary">Add to Cart</button>

        </div>
    );
}

export default Product;