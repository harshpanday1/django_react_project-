import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const UpdateProduct = () => {

    const [image, setImage] = useState(null)
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")

    const history = useHistory();
    const { id } = useParams();

    const loadProducts = async () => {
        const { data } = await axios.get(`http://127.0.0.1:8000/api/${id}/`);
        console.log(data)
        setImage(data.image)
        setName(data.name)
        setPrice(data.price)
        setDescription(data.description)
        setCategory(data.category)
    }

    useEffect(() => {
        loadProducts()
    }, [])
    // update products
    const UpdateProductInfo = async () => {
        let formField = new FormData()
        formField.append('name', name)
        formField.append('price', price)
        formField.append('description', description)
        formField.append('category', category)

        if (image !== null) {
            formField.append('image', image)
        }

        await axios({
            method: 'PUT',
            url: `http://127.0.0.1:8000/api/${id}/`,
            data: formField
        }).then(response => {
            console.log(response.data)
            history.push('/')
        })
    }

    return (
        <div>
            <h1>update page</h1>
            <div className="container">
                <div className="form-group">

                    <div className="form-group">
                        <img src={image} height="300" width="150" />
                        <label>Select Image To Upload</label>
                        <input
                            type="file"
                            className="form-control form-control-lg"
                            name="image"
                            src={image}
                            onChange={(e) => setImage(e.target.files[0])}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter prodect Name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                    </div>
                    <div className="form-group">


                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter prodect price"
                            name="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter prodect Decsription"
                            name="decsription"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter prodect Category"
                            name="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-success" onClick={UpdateProductInfo}>Update Product</button>



                </div>
            </div>
        </div>
    );

};

export default UpdateProduct;