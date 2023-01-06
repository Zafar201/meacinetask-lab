import React from "react";
import { Col, Row } from "react-bootstrap";
import Rating from "../rating/Rating";
import "./Cards.css";
import { motion, useAnimation } from "framer-motion";
import { cardsRecipe } from "../../data";
function Cards() {
  const divAnimationVariants = {
    init: {
      y: 0,
    },
    anim: {
      y: -20,
    },
  };
  const divAnimationControls = useAnimation();
  return (
    
   <>
      {cardsRecipe.map((itm, i) => (
        <>
        
          {i !== 3 ? (
            <>
            <motion.Col
          className="card-design"
          md={3}
         
          whileHover={{ scaleY: 1.1 }}
          transition={{ stype: "spring", stiffness: 3000 }}>
              <Row className="card-img">
                <img src="/assets/3.jpg" alt="" />
              </Row>
              <Row className="item-name">
                <h1>{itm.name}</h1>
                <center>
                  {" "}
                  <p
                    className={
                      itm.level === "intermediate"
                        ? "intermediate"
                        : itm.level === "advanced"
                        ? "advanced"
                        : "beginner"
                    }
                  >
                    {itm.level}
                  </p>
                </center>
              </Row>
              <Row className="item-type">
                <Col>
                  <h2>25</h2>
                  <span>mm</span>
                </Col>
                <Col className="item-border">
                  <h2>25</h2>
                  <span>mm</span>
                </Col>
                <Col>
                  <h2>25</h2>
                  <span>mm</span>
                </Col>
              </Row>
              <Row>
                <Rating rating={itm.rating} />
              </Row>
              <hr />
              <Row className="card-bottom">
                <h3>start cooking</h3>
              </Row>
              </motion.Col>

            </>
          ) : (
            <>
            <Col md={3} className='mentor-cards'>
            <Row>
              <p>PRO</p>
            </Row>
            <Row>
              <h1>Mentorship Programme</h1>
              <h2>a mentor eill track your progress and give
                you tips for faster culinary growth
              </h2>
            </Row>
            <img className="chef-img"  src="/assets/chef.png" alt="" />
            </Col>

           
            </>
          )}
          </>
      ))}
    

    </>
 
    );
  
}

export default Cards;
