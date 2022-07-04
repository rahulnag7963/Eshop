import axios from 'axios';
import React, { useState } from 'react';
import { InputGroup, Form, FloatingLabel, Button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import Fade from "react-reveal/Fade";
const AddProduct = () => {
  const history = useNavigate();
  const [Input, setInput]= useState({
      name: "" ,
      price: "",
      description: "",
      availability: true,
      category: "",
      rating: "",
      image: ""
    });
   
  const hC =(e)=>{
    setInput ((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value,
    }));
    //console.log(e.target.name,"Value",e.target.value);
   }

   const sendReq = async() =>{
    axios.post("http://localhost:5000/products",{
      name: String(Input.name),
      price: Number(Input.price),
      category: String(Input.category),
      description: String(Input.description),
      image: String(Input.image),
      availability: Boolean(true),
      rating: Number(0)
    }).then(res=>res.data);
   }

   const [Check, setCheck] = useState(false);
   const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(Input,Check);
    sendReq().then(()=> history("/products"));
   };

  return (
    <Fade right>
      <div className="p-3">
      <h2>Add a product to sell:</h2>
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
        <Button type="submit" variant ="outline-danger">Submit Product</Button>
      </Form>
      </div>
    </Fade>
  )
}

export default AddProduct