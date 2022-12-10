import React from "react";
import styles from "./About.module.css";
import Typical from "react-typical";
import { Box, Button, Hide, Show, SimpleGrid, Text } from "@chakra-ui/react";
import myImg from "./Image/myImg.jpg";
import Resume from "./Image/Vivek-Jawale-Resume.pdf";

import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Icons from "./Icons";
const About = () => {
  return (
    <>
      <SimpleGrid
        columns={[1, 1, 1, 2]}
        name="Navbar"
        mb={"5%"}
        className={styles.intro}
      >
        <Show below="lg">
          <Box mt={"10%"}>
            <motion.div whileHover={{ scale: 1.1 }} className={styles.right}>
              <img
                className={styles.my_img}
                src="https://avatars.githubusercontent.com/u/98386705?v=4"
                alt="my_Image"
              />
            </motion.div>
          </Box>
        </Show>

        <Box className={styles.left}>
          <div className={styles.name}>
            <div className={styles.icons}>
              <Icons />
            </div>

            <Text fontWeight="bold" fontSize="2rem" color={"DarkSeaGreen"}>
              {" "}
              Hello,I am Vivek Jawale
            </Text>
            <Hide below="md">
              <Text
                fontWeight="normal"
                fontSize="2.5rem"
                color={"DarkSeaGreen"}
                className={styles.typical}
              >
                <h1>
                  <Typical
                    loop={Infinity}
                    steps={[
                      "A Full Stack Web Developer",
                      1500,
                      "A MERN Stack Developer",
                      1500,
                    ]}
                  />
                </h1>
              </Text>
            </Hide>

            <Text
              fontWeight="normal"
              fontSize="1.2rem"
              color={"DarkSeaGreen"}
              className={styles.info}
            >
              Aspire to build a career in an organization with dedicated people,
              where I can implement my technical and logical skills in the
              creative domain..
            </Text>
          </div>
          <div className={styles.hire}>
            {/* <Link to="contact" spy={true} smooth={true}>
              <Button
                _focus={{ outline: "none" }}
                className={styles.hire_btn}
                width={"130%"}
                textColor={"white"}
                backgroundColor={"black"}
              >
                Hire
              </Button>
            </Link> */}

            <a href={{/*Resume*/}} download style={{ textDecoration: "none" }}>
              <Button
                _focus={{ outline: "none" }}
                width={"130%"}
                textColor={"white"}
                backgroundColor={"Grey"}
              >
                Download Resume
              </Button>
            </a>
          </div>
        </Box>
        <Hide below="lg">
          <Box>
            <motion.div whileHover={{ scale: 1.1 }} className={styles.right}>
              <img className={styles.my_img} src={myImg} alt="my_Image" />
            </motion.div>
          </Box>
        </Hide>
      </SimpleGrid>
    </>
  );
};

export default About;
