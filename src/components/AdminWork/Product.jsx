
import { useHistory } from 'react-router';
import './product.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Product = () => {
    //states
    const history = useHistory();
    const[category, setCategory]=useState();
    const[product, setProduct]=useState();
    const[deleted, setDeleted]=useState(false);
    
    //category get
    // const fetchCategoryData=()=>{  
    //     // Make a request for a user with a given ID
    //     axios.get(`http://localhost:4000/category`)
    //         .then((response) => {
    //             console.log(response);
    //             setCategory(response.data);//data esma
           
    //         })
    //         .catch(function (error) {
    //             // handle error
    //             console.log("Error -> ",error);
    //         });
    // }
   

    const fetchProductData=()=>{  
        // Make a request for a user with a given ID
        axios.get(`http://localhost:4000/product`)
            .then((response) => {
                console.log(response);
                setProduct(response.data);//data esma
           
            })
            .catch(function (error) {
                // handle error
                console.log("Error -> ",error);
            });
    }
    useEffect(()=>{
        // fetchCategoryData();
        fetchProductData();
    },[deleted])


    //category delete
    // const deleteCategory=(cat)=>{
    //     setDeleted(true);
    //     console.log(cat);
    //     // Make a request for a user with a given ID
    //     axios.delete(`http://localhost:4000/deleteCategoryById/${cat}`)
    //         .then(function (response) {
    //           alert('deleted');
    //           setDeleted(false);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //             setDeleted(false);
    //         });
    // }
    const deleteProduct=(pro)=>{
        setDeleted(true);
        console.log(pro);
        // Make a request for a user with a given ID
        axios.delete(`http://localhost:4000/deleteProductById/${pro}`)
            .then(function (response) {
            //   alert('deleted');
              setDeleted(false);
            })
            .catch(function (error) {
                console.log(error);
                setDeleted(false);
            });
    }

    return (
        <div>
        <div className="header-admin">
            <h1 className="product-h1"><em>Admin</em></h1>
        </div>

        {/* category list */}
        {/* <div className="table-container-category">
            <button className="table__add" onClick={()=> history.push("/addCategory")}>Add Category</button>
            <h3 className="category-list-h3"><em>Category List</em></h3>
            <table className="category-table">
                <tr>
                    <th>Category Id</th>
                    <th>Name</th>
                    <th>Action</th>
                </tr>
                { (category !== undefined) && category.map((cat)=>{
                    return(
                        <tr>
                            <td>{cat.categoryId}</td>
                            <td>{cat.categoryName}</td>
                            <td>
                                <button className="table__remove" onClick={()=>deleteCategory(cat.categoryId)}>Remove</button>
                            </td>
                        </tr>
                    );
                })
                } 
            </table>
        </div>

        <hr className="list-hr" /> */}

        <div className="table-container">
            <button className="table__add" onClick={()=> history.push("/addProduct")}>Add Product</button>
            <h3 className="product-list-h3"><em>Product List</em></h3>
            <table>
                <tr>
                    <th>Product Id</th>
                    <th>Name</th>
                    <th>Brand</th>
                    <th>Price</th>
                    <th>Color</th>
                    <th>Type</th>
                    <th>Description</th>
                    <th>Image</th>
                    <th>Size</th>
                    {/* <th>Category</th> */}
                    <th>Quantity</th>
                    <th>Action</th>
                </tr>
                {(product !== undefined) && product.map((pro)=>{
                    return(
                <tr>
                    <td>{pro.productId}</td>
                    <td>{pro.productName}</td>
                    <td>{pro.brand}</td>
                    <td>{pro.price}</td>
                    <td>{pro.color}</td>
                    <td>{pro.type}</td>
                    <td>{pro.description}</td>
                    <td>{pro.image}</td>
                    <td>{pro.size}</td>
                    {/* <td>{pro.category}</td> */}
                    <td>{pro.productQuantity}</td>
                    <td>
                        <button className="table__update" onClick={()=>history.push({pathname:"/updateProduct", state: pro})}>Update</button>
                        <button className="table__remove" onClick={()=>deleteProduct(pro.productId)}>Remove</button>
                    </td>
                </tr>
                  );
                })
                }
            </table>
        </div>
    </div>
    )
}

export default Product
