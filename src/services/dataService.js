import axios from 'axios'


let mockCatalog = [
{
    _id: "1",
    title: "Nike Dunk UNC",
    category: "Nike",
    price: 150.00,
    image: "Dunk-UNC.jpg"
},
{
    _id: "2",
    title: "Nike AJ1 x TS High",
    category: "Nike",
    price: 500.00,
    image: "AJ1-TS-High.jpeg"
},

{
    _id: "3",
    title: "Adidas Yeezy 350 v2",
    category: "Adidas",
    price: 350.00,
    image: "Adidas-YBZebra.jpg"
},

{
    _id: "4",
    title: "Vans x FOG",
    category: "Vans",
    price: 125.00,
    image: "FOG-Vans.jpeg"
},

{
    _id: "5",
    title: "AJ1 x TS Low",
    category: "Nike",
    price: 600.00,
    image: "AJ1-TS-Low.jpg"
},

{
    _id: "6",
    title: "Air Jordan 11 'Bred'",
    category: "Nike",
    price: 200.00,
    image: "AJ11-Bred.jpg"
},

{
    _id: "7",
    title: "Nike Dunk SB 'Shimizu'",
    category: "Nike",
    price: 300.00,
    image: "DunkSB-Shimiuzu.jpg"
},

{
    _id: "8",
    title: "Vans Old Skool",
    category: "Vans",
    price: 65.00,
    image: "Vans-OS.jpg"
},

];

class DataService {

    async getCatalog(){
        let response = await axios.get("http://127.0.0.1:5000/api/catalog");
        return response.data;
        //return mockCatalog
    }


    async getCoupons(){
        let response = await axios.get("http://127.0.0.1:5000/api/couponCodes")
        return response.data;
    }

    async saveCoupon(coupon){
        let response = await axios.post("http://127.0.0.1:5000/api/couponCodes", coupon);
        return response.data;
    }

    async saveProduct(product){
        let response = await axios.post("http://127.0.0.1:5000/api/catalog", product);
        return response.data;
    }
}

export default DataService;