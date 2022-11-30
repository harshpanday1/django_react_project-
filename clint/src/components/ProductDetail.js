import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';

const ProductDetail = () => {

    const [product, setProduct] = useState("")

    const { id } = useParams();
    const history = useHistory();


    const getSingleProduct = async () => {
        const { data } = await axios.get(`http://127.0.0.1:8000/api/${id}`)
        console.log(data)
        setProduct(data)
    }

    useEffect(() => {
        getSingleProduct();
    }, [])

    //Delete Product
    const deleteProduct = async (id) => {
        await axios.delete(`http://127.0.0.1:8000/api/${id}/`)
        history.push('/');
    }

    return (
        <div>
            <h1>Product Detils</h1>
            <div className="single-product-info">
                <img src={product.image} height="400" width="250" />
                <p>{product.name}</p>
                <p>{product.price}</p>
                <p>{product.description}</p>
                <p>{product.category}</p>

                <Link className="btn btn-primary m-2" to={`/${product.id}/update`}>Update</Link>
                <Link className="btn btn-danger m-2" onClick={() => deleteProduct(product.id)}>Delete</Link>


            </div>
        </div>
    );

};

export default ProductDetail;