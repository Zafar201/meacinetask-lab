import React, { useState } from "react";
import "./Sidebar.css";
import { motion } from "framer-motion";
import { Col, Row } from "react-bootstrap";
import {MdOutlineFavoriteBorder} from 'react-icons/md'
import {HiOutlineBookOpen} from 'react-icons/hi'
import {SiCoursera} from 'react-icons/si'
import {TbWorld} from 'react-icons/tb'
import {GiHamburgerMenu} from 'react-icons/gi'
import {GrDropbox} from 'react-icons/gr'

export const SidebarData = [
  {
    icon: HiOutlineBookOpen,
    heading: "Recipes",
  },
  {
    icon: MdOutlineFavoriteBorder,
    heading: "Favourites",
  },
  {
    icon: SiCoursera,
    heading: "Courses",
  },
  {
    icon: TbWorld,
    heading: "Community",
  },
];

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpaned] = useState(true);

  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };
  console.log(window.innerWidth);
  return (
    <>
      <div
        className="bars"
        style={expanded ? { left: "60%" } : { left: "5%" }}
        onClick={() => setExpaned(!expanded)}
      >
        <GiHamburgerMenu />
      </div>
      <motion.div
        className="sidebar"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ""}
      >

        <div className="logo"> 
          <span>
           Fo<span>d</span>oo
          </span>
        </div>

        <Row className="sidebar-logo">
          <img src="/assets/profile.png" alt="" />
          <h1>Zafar Irshad</h1>
          <p>Chef de parte</p>
        </Row>
        <Row className="sidebar-drop">
          <Col>
             <GrDropbox/>37
          </Col>
               </Row>

        <div className="menu">
          {SidebarData.map((item, index) => {
            return (
              <div
                className={selected === index ? "menuItem active" : "menuItem"}
                key={index}
                onClick={() => setSelected(index)}
              >
                <item.icon className={selected === index ? "activeIcon" : ""}/>
                <span>{item.heading}</span>
              </div>
            );
          })}
          <div className="menuItem">
      
            <Row>
             <p>creat a team and take part in <span className="menu-spam">Tv show !</span> </p>
            </Row>
      
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
