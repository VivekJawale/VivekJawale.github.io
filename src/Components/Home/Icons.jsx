import React from "react";
import { IconButton, Link } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Icons = () => {
  return (
    <>
      <Link href="https://github.com/VivekJawale" isExternal>
        <IconButton
          _focus={{ outline: "none" }}
          size="lg"
          icon={<FaGithub />}
        />
      </Link>
      <Link
        href="https://www.linkedin.com/in/vivek-jawale-30828a200/"
        isExternal
      >
        <IconButton
          size="lg"
          _focus={{ outline: "none" }}
          icon={<FaLinkedin />}
        />
      </Link>
    </>
  );
};

export default Icons;
