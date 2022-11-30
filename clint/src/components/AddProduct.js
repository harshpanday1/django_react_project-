import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom"



const AddProduct = () => {


    const [image, setImage] = useState(null)
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const history = useHistory();


    const AddProductInfo = async () => {
        let formField = new FormData()
        formField.append('name', name)
        formField.append('price', price)
        formField.append('description', description)
        formField.append('category', category)

        if (image !== null) {
            formField.append('image', image)
        }



        await axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/',
            data: formField
        }).then((response) => {
            console.log(response.data);
            history.push('/');
        })

    }

    return (
        <div>
            <h1>Add Product</h1>
            <div className="container">

                <div className="form-group">
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
                <button className="btn btn-success" onClick={AddProductInfo}>Add Product</button>



            </div>

        </div>


    );
};

export default AddProduct;