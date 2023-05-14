import { Flex, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import {
    SiCodesandbox,
    SiGithub,
    SiHackerrank,
    SiLeetcode,
    SiLinkedin,
} from "react-icons/si";

const Footer = () => {
    return (
        <>
            <Flex
                borderTop={"1px solid gray"}
                width="100%"
                gap={4}
                padding={3}
                justifyContent="center"
                textColor={"white.400"}
                direction={["column", "column", "row"]}
                alignItems="center"
            >
                <Text> Copyrights © Rights Reserved By Vivek Jawale</Text>
                <Spacer />
                <Flex gap={12}>
                    <a href="https://github.com/vivekjawale/">
                        {" "}
                        <SiGithub size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/vivek-jawale-30828a200/">
                        {" "}
                        <SiLinkedin size={20} />
                    </a>
                    <a href="https://www.hackerrank.com/vivekjawale41">
                        {" "}
                        <SiHackerrank size={20} />
                    </a>
                    <a href="https://leetcode.com/vivekjawale41/">
                        {" "}
                        <SiLeetcode size={20} />
                    </a>

                    <a href="https://codesandbox.io/u/VivekJawale">
                        {" "}
                        <SiCodesandbox size={20} />
                    </a>
                </Flex>
            </Flex>
        </>
    );
};

export default Footer;