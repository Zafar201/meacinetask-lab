import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Cards from '../components/Cards/Cards'
import{motion} from 'framer-motion'

function MainScreen() {
  return (
    <div>
        <motion.Container 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:1.5,duration:1.5}}>
            <Row className='main-header'>
                <Col md={1}>
                   <img src="/assets/4.jpg" alt="" />
                </Col>
                <Col md={8} style={{paddingLeft:'0px'}}>
                  <Row>
                    <h1>Only The Best Recipes!</h1>           
                  </Row>
                  <Row>
                    <p>Today's new recipes for you</p>  
                  </Row>
                </Col>
                <Col className='main-header-right'>
                  <Row>
                    <h2>168</h2>
                    <p>tutorial</p>
                  </Row>
                
                </Col>
                <Col style={{marginLeft:'26px'}} className='main-header-h2'>
                   <h2>168</h2>
                    <p>tutorial</p>
                </Col>
            </Row>

            <Row className='main-cards'>
              <Cards/>
              {/* <Cards/>

               <Cards/>
              <Cards/>
              <Cards/> 
              <Cards/> 
              <Cards/> 
              <Cards/> 
              <Cards/>  */}


            </Row>
        </motion.Container>
    </div>
  )
}

export default MainScreen