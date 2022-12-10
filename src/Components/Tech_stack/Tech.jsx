import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";
import { Image, SimpleGrid, Text } from "@chakra-ui/react";
import dsa from "../Skills/tools/dsa.jpg";
import mongo from "./assets/mongodb.png";
import express from "./assets/express.png";
import react from "./assets/react.png";
import nodejs from "./assets/nodejs.png";

const TeChStack = [
  {
    id: 1,
    title: "MONGO DB",
    icon: mongo,
  },
  {
    id: 2,
    title: "EXPRESS",
    icon: express,
  },
  {
    id: 3,
    title: "REACT JS",
    icon: react,
  },
  {
    id: 4,
    title: "NODE JS",
    icon: nodejs,
  },
  // {
  //   id: 5,
  //   title: "DSA",
  //   icon: dsa,
  // },
];

const Tech = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const transition = {
    duration: 1,
    type: "spring",
  };
  return (
    <>
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <Text
          fontSize={"xx-large"}
          fontWeight="semibold"
          color={"#f4e16a"}
          textAlign="center"
          mb={4}
        >
          TECH-STACKS
        </Text>

        <SimpleGrid
          name="tech-stack"
          columns={[2, 2, 3, 4]}
          gap="20px"
          width="80%"
          margin="auto;"
        >
          {TeChStack.map((e) => {
            return (
              <>
                <div>
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={transition}
                  >
                    <Image
                      src={e.icon}
                      width="110px"
                      borderRadius="50%"
                      margin="auto"
                      alt="icons"
                    />
                    <Text fontSize={"xl"} color="sky" textAlign={"center"}>
                      {e.title}
                    </Text>
                  </motion.div>
                </div>
              </>
            );
          })}
        </SimpleGrid>
      </div>
    </>
  );
};

export default Tech;
