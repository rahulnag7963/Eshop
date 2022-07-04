import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Container} from 'react-bootstrap';
import Product from './Product';
import "./Product.css";
const URL = "http://localhost:5000/products";
const fetch = async() => {
    return await axios.get(URL).then((res)=> res.data)
}


const Products = () => {
    const [products, setProducts] = useState();
    
    useEffect(() =>{
        
        fetch().then((data) => setProducts(data.products));
    
    }, []);
    
    console.log(products);
    return (
    <Container className="justify-content-center">
            <div className='display-3'> Products for Sale:</div>
        <ul>
            
            {products && products.map((product,i)=>(
                <div className="product" key={i}>
                    <Product product={product}/>
                </div>
            ))
            }  
        </ul>
          
    </Container>
  )
}

export default Products