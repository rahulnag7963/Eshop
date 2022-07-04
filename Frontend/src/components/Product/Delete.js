import React from 'react'
import {Alert, Button, ButtonGroup} from 'react-bootstrap';
import {useNavigate, useParams} from "react-router-dom";
import axios from 'axios';
import Fade from 'react-reveal/Fade';
const Delete = () => {
    const history = useNavigate();
    const id = useParams().id;
    const deleteProduct = async()=> {
      await axios
        .delete(`http://localhost:5000/products/${id}`)
        .then((res)=> res.data)
        .then(()=> history("/"))
        .then(()=> history("/products"));
    }

    return (
    <Fade bottom> 
        <div className="d-grid gap-2"> 
                <Alert variant="danger"> Are you sure you want to delete this product?</Alert>
                <ButtonGroup size="lg" className="mb-2">
                    <Button onClick={deleteProduct} href={"/Products"} variant = "outline-danger">Yes</Button>
                    <Button href={"/Products"} variant = "outline-danger">No</Button>
                </ButtonGroup>
        </div>
    </Fade>
  )
}

export default Delete