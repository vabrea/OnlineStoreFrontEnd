import "./catalog.css"
import Product from "./product"
import {useState, useEffect} from 'react';
import DataService from "../services/dataService";

const Catalog = () =>{
    const [products, setProducts] = useState ([]);

    const loadCatalog = async () => {
        const service = new DataService();
        let prods = await service.getCatalog();
        setProducts(prods);
    };

    useEffect(() => {
        loadCatalog();
    }, []);

    return(
        <div className="catalog">
            <h6>We currently have {products.length} shoes in stock!</h6>
            

            {products.map((prod) => (
                <Product key= {prod._id} info={prod}></Product>
              
            ))}
            
        </div>
    );
}

export default Catalog