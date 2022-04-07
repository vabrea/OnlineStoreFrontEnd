import "./catalog.css"
import Product from "./product"

function Catalog(){
    return(
        <div className="catalog">
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
        </div>
    );
}

export default Catalog;