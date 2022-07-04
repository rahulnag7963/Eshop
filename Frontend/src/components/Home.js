import React from 'react'
import Fade from "react-reveal/Fade";
import abstract from "../pictures/Prismatic-Abstract-Line-Art-No-Background.svg";
import {Stack,Button} from "react-bootstrap";
const Home = () => {
  return (
    <Fade>
      <Stack direction ="horizontal" gap={2}>
        <img  width = "1100" height = "450"src={abstract}></img>
        <Fade right big><div className="display-3">
            Eshop
        </div>
        <div className="display-6">
          Shopping with trusted owners.
        </div>
        </Fade>
      </Stack>
      
    </Fade>

  )
}

export default Home