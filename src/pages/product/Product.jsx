import ProductDetails from "../../components/productdetails/ProductDetails";
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import api from '../../services/api';

const Product = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    
    useEffect(() => {
        api
            .get("")
            .then((response) => {
                setProduct(response.data[id])
            })
    }, [id])
    return (
        <>
            {product.titulo && <ProductDetails product={product} />}
        </>
    )
}

export default Product;