import React from 'react'
import { useState } from 'react';
import './addCategory.css';
import axios from 'axios';
import { useHistory } from 'react-router';

const AddCategory = () => {
    const history = useHistory();
    const [category, setCategory] = useState({categoryName: ''});

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setCategory({ ...category, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        postCategory();
        history.push('/product');
        console.log(category);
    }
    const postCategory=async()=>{ 
        // Make a request for a user with a given ID
        await axios.post(`http://localhost:4000/saveCategory`,category)
            .then((response) => {
            
                console.log(response);
    
            })
            .catch(function (error) {
                // handle error
                console.log("Error -> ",error);
            });
    }

    return (
        <>
            <div className="header-admin">
                <h1 className="product-h1"><em>Add Catgeory</em></h1>
            </div>
    
            <article>
                <form className="addcategory-form" onSubmit={handleSubmit}>
                    <h3><em>Add Catgeory Form</em></h3>
                    <label htmlFor="category Name">Category Name :</label>
                    <input 
                        className="addformcategory__text"
                        type="text" 
                        name="categoryName"
                        value={category.categoryName}
                        onChange={handleChange}/>
                    <button className="addformcategory__submit">Add Category</button>
                </form>
            </article>
        </>
    )
}

export default AddCategory
