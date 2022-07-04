import React from 'react';
import Fade from "react-reveal/Fade";
import {Card, Stack} from "react-bootstrap";
import Picture from "../pictures/P1050368.JPG"
const About = () => {
  return (
    <Fade>
      <div className="p-3">
        <div className="display-3"><ins> About me </ins></div>
          <Stack direction="horizontal">
            <Card>
                <Card.Body>This website was made to show off my skills and abilities as a web developer. 
                  This CRUD app was built using MERN stack along with bootstrap, react router dom, react-reveal and
                  other small libraries to make the project in front of you. In the future, I hope to add a rating system along
                  with a reviews of the product and perhaps a login system as well. In the meantime, enjoy the app which allows the
                  user to be able to create and show off their own products, and delete and update products should they feel the need
                  to do so. Thanks again for checking my project out!
                </Card.Body>
            </Card>
            <img className=" px-4 mt-2 p-2" width = "780" height = "440" src={Picture} ></img>
          </Stack>
      </div>
    </Fade>
  )
}

export default About