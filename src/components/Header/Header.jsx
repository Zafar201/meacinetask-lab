import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {FiSearch} from'react-icons/fi'
import "./Header.css";



function Header() {
  return (
    <div>
        <Container className='header'>
            <Row>
               <Col md={4}>
                
               <FiSearch />
                <input type="text" placeholder='Enter your search request...' />
                <hr />
               </Col>
               <Col className='header-right'>
                 <button>Go to premium</button>
               </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Header