import React from 'react'
import {Container, Nav, Navbar} from'react-bootstrap';
import logo from '../pictures/E.png';
import{Link,Route,Routes, BrowserRouter as Router} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Products from './Product/Products';
import AddProduct from './AddProduct';
import ProductDetails from './Product/ProductDetails';
import Delete from './Product/Delete';
const Header = () => {
  return (
    <Router>
        <div>
            <Navbar bg="light" variant ="light">
                <img
                src={logo}
                width="75"
                height="75"
                className="d-inline-block align-top"
                />
                <Navbar.Brand>EShop</Navbar.Brand>
                <Container>
                 <Nav className="me-auto">
                    <Nav.Link as={Link} to ="/">Home</Nav.Link>
                    <Nav.Link as={Link} to = "/Products">Products</Nav.Link>
                    <Nav.Link as={Link} to = "/Sell">Sell</Nav.Link>
                    <Nav.Link as={Link} to = "/About">About</Nav.Link>
                 </Nav>   
                </Container>
            </Navbar>
        </div>
        <div>
            <Routes>
                <Route path="/" element = {<Home/>}/>
                <Route path="/Products" element= {<Products/>}/>
                <Route path="/Sell" element={<AddProduct/>}/>
                <Route path="/About" element={<About/>}/>
                <Route path="/Products/:id"element={<ProductDetails/>} exact/>
                <Route path="/Delete/:id"element={<Delete/>} exact/>
            </Routes>
        </div>
    </Router>
  )
}

export default Header