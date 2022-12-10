import React from "react";
import styles from "./Nav.module.css";
import {
  Box,
  Button,
  Flex,
  IconButton,
  Text,
  useColorMode,
  Hide,
  Show,
} from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-scroll";
import Sidebar from "./Sidebar";
import Resume from "../Home/Image/Vivek-Jawale-Resume.pdf";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <>
      <Box className={styles.main}>
        <Box className={styles.left}>
          <Box className={styles.name}>
            <Flex>
              <span>
                <Link to="Navbar" spy={true} smooth={true}>
                  <Text cursor="pointer" color={"#f4e16a"}>
                    VIVEK
                  </Text>
                </Link>
              </span>
              <span>
                <Link to="Navbar" spy={true} smooth={true}>
                  <Text cursor="pointer" color={"#075985 "}>
                    JAWALE
                  </Text>
                </Link>
              </span>
            </Flex>
          </Box>
        </Box>

        <Box className={styles.right}>
          <Hide below="md">
            <Box className={styles.list}>
              <ul>
                <li>
                  <Link
                    activeClass="active"
                    to="Navbar"
                    offset={-55}
                    spy={true}
                    smooth={true}
                  >
                    <Text fontWeight={"medium"} color="white">
                      HOME
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link to="tech-stack" spy={true} smooth={true} offset={-50}>
                    <Text fontWeight={"medium"} color="white">
                      TECH-STACK{" "}
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link to="skills" spy={true} offset={-50} smooth={true}>
                    <Text fontWeight={"medium"} color="white">
                      {" "}
                      SKILLS{" "}
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link to="projects" offset={-175} spy={true} smooth={true}>
                    <Text fontWeight={"medium"} color="white">
                      PROJECTS{" "}
                    </Text>
                  </Link>
                </li>
              </ul>
            </Box>
          </Hide>

          <Hide below="sm">
            <Link to="contact" spy={true} smooth={true}>
              <Button
                colorScheme={"#67dcfa"}
                color="white"
                size={"sm"}
                mt={2}
                outline="none"
                _focus={{ outline: "none" }}
              >
                <Text color="white">CONTACT ME </Text>{" "}
              </Button>
            </Link>
          </Hide>
          <Hide below="sm">
            <a
              href={
                {
                  /*Resume*/
                }
              }
              rel="noreferrer"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <Button
                colorScheme={"#67dcfa"}
                size={"sm"}
                mt={2}
                outline="none"
                color="white"
                _focus={{ outline: "none" }}
              >
                {" "}
                <Text color="white">RESUME </Text>{" "}
              </Button>
            </a>
          </Hide>

          <IconButton
            colorScheme={"#67dcfa"}
            _focus={{ outline: "none" }}
            size="sm"
            m={2}
            onClick={toggleColorMode}
            icon={isDark ? <FaSun /> : <FaMoon />}
          />

          {/* ----------------------------------------------------------------------------------------- */}

          <Show below="md">
            <Sidebar />
          </Show>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
