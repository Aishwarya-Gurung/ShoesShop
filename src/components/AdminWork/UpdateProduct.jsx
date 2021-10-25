import React from 'react'
import './addProduct.css';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useLocation } from 'react-router';
import axios from 'axios';


const UpdateProduct = () => {
    const history = useHistory();
    const  { state } = useLocation();
    console.log(state);
    // const [product, setProduct] = useState(state);
    const [product, setProduct] = useState({productName: state.productName, brand: state.brand, price: state.price, color: state.color, type: state.type, description: state.description, category:{categoryId:state.categoryName}, productQuantity: state.productQuantity, size: state.size});
    // const [products, setProducts] = useState([]);
    let [image, setImage]=useState();
    const[productCategory, setProductCategory]=useState();

    // const handleChange = (e) => {
    //     const name = e.target.name;
    //     const value = e.target.value;
    //     setProduct({ ...product, [name]: value });
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log("updated");
    // }

    const handleChange = (e) => {

        const name = e.target.name;
        const value = e.target.value;
        if(name=="category"){
            handleChangeCategory(e);
        }else{
            setProduct({ ...product, [name]: value });
        // alert("chalyo");
        }
        
    };

    const handleChangeCategory = (e) => {
        const name = e.target.name;
        let value = {
            categoryId: e.target.value
        }
        product[name]=value;
        setProduct({ ...product});
        // alert("chalyo");
    };
    
    const handleImageChange = (e) => {
        image = e.target.files[0];
        setImage(image);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
       
        history.push('/product');
        console.log(product);
        // alert("bhayo");
        const formData=new FormData();
            formData.append("product", JSON.stringify(product));
            formData.append("file", image);

            fetchProduct(formData);
    }

    const fetchProduct=(formData)=>{  
        // Make a request for a user with a given ID
        axios.put(`http://localhost:4000/updateProductById/${state.productId}`, formData)
            .then((response) => {
                // alert("product updated");
                console.log(response);
    
            })
            .catch(function (error) {
                // handle error
                console.log("Error -> ",error);
            });
      }



      const fetchCategoryForProduct=()=>{  
        // Make a request for a user with a given ID
        axios.get(`http://localhost:4000/category`)
            .then((response) => {
                // alert("fetched");
                console.log("category");
                console.log(response.data);
                setProductCategory(response.data);
    
            })
            .catch(function (error) {
                // handle error
                console.log("Error -> ",error);
            });
      }
      useEffect(()=>{
        fetchCategoryForProduct();
        
    },[])

    return (
        <>
        <div className="header-admin">
                <h1 className="product-h1"><em>Update Product</em></h1>
            </div>
    
            <article>
           
                <form className="addproduct-form" onSubmit={handleSubmit}>
               
                <h3><em>Update Product Form</em></h3>
                    <label htmlFor="Product Name">Product Name :</label>
                    <input 
                        className="addform__text"
                        type="text" 
                        name="productName"
                        value={product.productName}
                        onChange={handleChange}/>
                        
                    <label htmlFor="Product Brand">Product Brand :</label>
                    <input 
                        className="addform__text"
                        type="text" 
                        name="brand"
                        value={product.brand}
                        onChange={handleChange}/>
                       
                    <label htmlFor="Product Price">Product Price :</label>
                    <input 
                        className="addform__text"
                        type="text" 
                        name="price"
                        value={product.price}
                        onChange={handleChange}/>
                       
                    <label htmlFor="Product Color">Product Color :</label>
                    <input 
                        className="addform__text"
                        type="text" 
                        name="color"
                        value={product.color}
                        onChange={handleChange}/>
                        
                    <label htmlFor="Size">Size :</label>
                    <input 
                        className="addform__text"
                        type="text" 
                        name="size"
                        value={product.size}
                        onChange={handleChange}/>
                        
                    <label htmlFor="Product Description">Product Description :</label>
                    <input 
                        className="addform__text"
                        type="text" 
                        name="description"
                        value={product.description}
                        onChange={handleChange}/>
                        
                    {/* <label htmlFor="Product Image">Product Image :</label>
                    <input 
                        className="addform__text"
                        type="text" 
                        name="name"
                        value={product.image}
                        onChange={handleChange}/> */}
                        <input type="file" className="image-choose" id="inputImage" name="image" onChange={handleImageChange} />
                        
                        
                    <select className="form-select" id="specificSizeSelect" name="category" value={product.category.categoryId}  onChange={handleChange}>
                        
                        <option selected>Choose...</option>
                        {(productCategory !== undefined) && productCategory.map((value, index)=>{
                            return  <option value={index}>{value.categoryName}</option>
                           
                        })

                        }
                        
                    </select> 
                    <label htmlFor="Product Quantity">Product Quantity :</label>
                <input 
                    className="addform__text"
                    type="text" 
                    name="productQuantity"
                    value={product.productQuantity}
                    onChange={handleChange}/>
                        
            
                 
    
    
                    <button className="addform__submit">Update Product</button>
                </form>
            </article>
        </>
    )
}

export default UpdateProduct