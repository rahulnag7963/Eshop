import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';
import Fade from "react-reveal/Fade";
import {Form,InputGroup,FloatingLabel,Button} from 'react-bootstrap';
const ProductDetails = () => {
  const[Input, setInput] = useState({});
 
  const id = useParams().id;
  const history = useNavigate();
  //console.log(id);
   useEffect(()=>{
    
    const fH = async() => {
      await axios.get(`http://localhost:5000/products/${id}`)
      .then((res)=>res.data)
      .then(data=>setInput(data.product));
    } 
    fH();
   },[id]);

   const hC =(e)=>{
    setInput ((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value,
    }));
    //console.log(e.target.name,"Value",e.target.value);
   }

   const sendReq = async() => {
    await axios.put(`http://localhost:5000/products/${id}`,{
      name: String(Input.name),
      price: Number(Input.price),
      category: String(Input.category),
      description: String(Input.description),
      image: String(Input.image),
      availability: Boolean(true),
      rating: Number(0)
    }).then(res=>res.data);
   }


   const handleSubmit =(e)=>{
    e.preventDefault();
    //console.log(Input,Check);
    sendReq().then(()=> history("/products"));
   };

  return (
  
  <div className="p-3">
    <Fade>
    <h2>Update product details:</h2>
    <Form onSubmit={handleSubmit}>
      <InputGroup className="mb-3">
        <InputGroup.Text className="bg-danger">Product Name</InputGroup.Text>
        <Form.Control type="text" name="name" aria-label="Name" value ={Input.name} onChange={hC} />
      </InputGroup>     
      <InputGroup className="mb-3">  
        <InputGroup.Text  className="bg-danger">Price ($)</InputGroup.Text>
        <Form.Control type="number" name="price" aria-label="Dollar amount (with dot and two decimal places)" value ={Input.price} onChange={hC} /> 
      </InputGroup>
      <Form.Control  as ="select" name="category" value ={Input.category} aria-label="Select a category" className="mb-3" onChange={hC}>
        <option  value="Toys">Toys</option>
        <option  value="Appliances">Appliances</option>
        <option  value="Electronics" >Electronics</option>
        <option  value="Books" >Books</option>
        <option  value="Arts/Crafts" >Arts/Crafts</option>
        <option  value="Music" >Music</option>
        <option  value="Clothing" >Clothing</option>
        <option  value="Other" >Other</option>
      </Form.Control>
      <FloatingLabel className="mb-3"controlId="floatingTextarea2" label="Description">
        <Form.Control
          name="description"
          as="textarea"
          placeholder="Leave descriptions here"
          value = {Input.description} 
          onChange={hC}
          style={{ height: '100px' }}
        />
      </FloatingLabel>
      <InputGroup className="mb-3">
        <InputGroup.Text className="bg-danger">Image url</InputGroup.Text>
        <Form.Control name="image" aria-label="Image" value ={Input.image} onChange={hC} />
      </InputGroup>
      <Button type="submit" variant ="outline-danger">Update product details</Button>
    </Form>
    </Fade>
  </div>
  )
}

export default ProductDetails