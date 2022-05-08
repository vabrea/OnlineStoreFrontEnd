import "./productsInCart.css"
import SizeSelect from './sizeselect';
 

const ProductsInCart = (props) => {

    return(
    
        <div className="prod-cart">
            <div className="cart-image">
            <img src={"/images/" + props.info.image}></img>
            </div>
            <div className="cart-info">
                <p>{props.info.category}</p>
                <p>Sz: {props.info.size}</p>
                <p>{props.info.title}</p>
                <p>${props.info.price.toFixed(2)}</p>

                <button className="btn btn-sm btn-danger">Remove</button>
                
            </div>
        </div>
    )
}

export default ProductsInCart