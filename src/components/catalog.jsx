import "./catalog.css"
import Product from "./product"
import {useState, useEffect} from 'react';
import DataService from "../services/dataService";

const Catalog = () =>{
    const [products, setProducts] = useState ([]);

    const loadCatalog = () => {
        const service = new DataService();
        let prods = service.getCatalog();
        setProducts(prods);
    };

    useEffect(() => {
        loadCatalog();
    }, []);

    return(
        <div className="catalog">
            <h4>We currently have {products.length} shoes in stock!</h4>
            

            {products.map((prod) => (
                <Product key= {prod._id} info={prod}></Product>
              
            ))}
            
        </div>
    );
}

export default Catalog