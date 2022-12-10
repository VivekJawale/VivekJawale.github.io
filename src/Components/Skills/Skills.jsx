import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import chakra from "./images/chak.jpg";
import css from "./images/css.jpg";
import express from "./images/express.png";
import html from "./images/html.jpg";
import javascript from "./images/javascript.jpg";
import mongodb from "./images/mongodb.png";
import nodejs from "./images/nodejs.jpg";
import rect from "./images/rect.png";
import reducs from "./images/reducs.jpg";
import router from "./images/routerdom.png";
import styles from "./Skills.module.css";
import type from "./images/type.png";
import git from "./tools/git.jpg";
import github from "./tools/github.png";
import heroku from "./tools/heroku.png";
import json from "./tools/json.png";
import netlify from "./tools/netlify.png";
import npm from "./tools/npm.png";
import postman from "./tools/postman.jpg";
import vercel from "./tools/vercel.jpg";
import dsa from "./tools/dsa.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const front = [
  {
    id: 1,
    icon: html,
    title: "HTML",
  },
  {
    id: 2,
    icon: css,
    title: "CSS",
  },
  {
    id: 3,
    icon: javascript,
    title: "JAVASCRIPT",
  },
  {
    id: 4,
    icon: rect,
    title: "REACT JS",
  },
  {
    id: 5,
    icon: chakra,
    title: "CHAKRA UI",
  },
  {
    id: 6,
    icon: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
    title: "NEXT JS",
  },
];

const back = [
  {
    id: 1,
    icon: mongodb,
    title: "MONGO DB",
  },
  {
    id: 2,
    icon: express,
    title: "EXPRESS",
  },
  {
    id: 3,
    icon: nodejs,
    title: "NODE JS",
  },
  {
    id: 4,
    icon: reducs,
    title: "REDUX",
  },
];

const tools = [
  {
    id: 1,
    icon: git,
    title: "GIT",
  },
  {
    id: 2,
    icon: github,
    title: "GITHUB",
  },
  // {
  //   id: 3,
  //   icon: heroku,
  //   title:"HEROKU"
  // },
  {
    id: 4,
    icon: netlify,
    title: "NETLIFY",
  },
  {
    id: 5,
    icon: vercel,
    title: "VERCEL",
  },
  {
    id: 6,
    icon: npm,
    title: "NPM",
  },
  {
    id: 7,
    icon: json,
    title: "JSON-SERVER",
  },
  {
    id: 8,
    icon: postman,
    title: "POSTMAN",
  },
];

const Skills = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <SimpleGrid name="skills" mt={"7%"} gap="5%" columns={[1, 1, 2]}>
        <Box className={styles.front}>
          <Text
            fontSize={"xx-large"}
            fontWeight="semibold"
            color={"#f4e16a"}
            textAlign="center"
          >
            FRONTEND SKILLS
          </Text>
          <SimpleGrid
            rowGap="20px"
            m="20px"
            gap={"-50px"}
            columns={[2, 2, 2, 3]}
          >
            {front.map((f) => {
              return (
                <>
                  <Box data-aos="fade-up" data-aos-duration="1500">
                    <Box
                      p="9px"
                      w={"120px"}
                      h={"120px"}
                      bg="black"
                      m={"auto"}
                      borderRadius="10px"
                      mt={4}
                      boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                    >
                      <Image
                        border="4px solid yellow"
                        m={"auto"}
                        w={"100px"}
                        src={f.icon}
                        alt="icons"
                        borderRadius="50%"
                      />
                      <Text
                        mt={3}
                        fontSize={"l"}
                        color="sky"
                        textAlign={"center"}
                      >
                        {f.title}
                      </Text>
                    </Box>
                  </Box>
                </>
              );
            })}
          </SimpleGrid>
        </Box>

        <Box className={styles.back}>
          <Text
            fontSize={"xx-large"}
            fontWeight="semibold"
            color={"#f4e16a"}
            textAlign="center"
          >
            BACKEND SKILLS
          </Text>
          <SimpleGrid
            rowGap="20px"
            m="20px"
            gap={"-50px"}
            columns={[2, 2, 2, 3]}
          >
            {back.map((f) => {
              return (
                <>
                  <Box data-aos="fade-up" data-aos-duration="1500">
                    <Box
                      p="6px"
                      w={"120px"}
                      h={"120px"}
                      bg="black"
                      m={"auto"}
                      borderRadius="10px"
                      mt={4}
                      boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                    >
                      <Image
                        border="4px solid yellow"
                        m={"auto"}
                        w={"100px"}
                        src={f.icon}
                        alt="icons"
                        borderRadius="50%"
                      />
                      <Text
                        mt={3}
                        fontSize={"l"}
                        color="sky"
                        textAlign={"center"}
                      >
                        {f.title}
                      </Text>
                    </Box>
                  </Box>
                </>
              );
            })}
          </SimpleGrid>
        </Box>
      </SimpleGrid>

      {/* tools=============tooolss */}
      <Box
        mb={"7%"}
        mt={["70px", "70px", "50px", "50px"]}
        className={styles.front}
      >
        <Text
          fontSize={"xx-large"}
          fontWeight="semibold"
          color={"#f4e16a"}
          textAlign="center"
        >
          TOOLS
        </Text>
        <SimpleGrid rowGap="20px" m="20px" gap={"-50px"} columns={[2, 2, 3, 4]}>
          {tools.map((f) => {
            return (
              <>
                <Box data-aos="fade-up" data-aos-duration="1500">
                  <Box
                    p="9px"
                    w={"120px"}
                    h={"120px"}
                    bg="rgb(2, 132, 199)"
                    m={"auto"}
                    mt={4}
                    borderRadius="10px"
                    boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                  >
                    <Image
                      border="4px solid black"
                      m={"auto"}
                      w={"100px"}
                      src={f.icon}
                      alt="icons"
                      borderRadius="50%"
                    />

                    <Text
                      mt={3}
                      fontSize={"l"}
                      color="sky"
                      textAlign={"center"}
                    >
                      {f.title}
                    </Text>
                  </Box>
                </Box>
              </>
            );
          })}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Skills;
