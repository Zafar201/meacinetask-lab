import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";
import "./Header.css";
import { motion } from "framer-motion";

function Header() {
  return (
    <div>
      <Container className="header">
        <Row>
          <Col md={4}>
            <FiSearch />
            <input type="text" placeholder="Enter your search request..." />
            <hr />
          </Col>
          <Col className="header-right">
            <motion.button
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 4px gray",
              }}
            >
              Go to premium
            </motion.button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
