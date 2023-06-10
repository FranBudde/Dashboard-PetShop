import React from "react";
import { useParams } from "react-router-dom";


import productService from '../services/product'


const ProductDetail = () => {
    const {id} = useParams();

    const [product,setProduct] = React.useState({});

    React.useEffect(() =>{
        fetchData();
    },[])

    const fetchData = async () =>{
        const data = await productService.getById(id);
        setProduct(data);
    };

    return(
        <div id="div-conteiner-detail">
            <ul id="container-detail">
                <li id="titulo">{product.name}</li>
                <li id="imagen"><img src={`http://localhost:3030${product.mainImage}`} alt="foto del producto" /></li>
                <div id="container-info-product">
                    <li id="description">{product.pet}</li>
                    <li id="category">{product.category}</li>
                    <li id="price">${product.price}</li>
                </div>
            </ul>
        </div>
    );
}

export default ProductDetail