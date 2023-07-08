import {
    Box,
    Flex,
    Image,
    Stack,
    Text,
    useColorModeValue,
  } from "@chakra-ui/react";
  import React from "react";
  import Githubcalendar from "react-github-calendar";
  
  const Github = () => {
    return (
      <>
        <Box maxW={"7xl"} m="auto" mb={8} padding="20px" alignItems="center">
          <Stack spacing={4} w={["100%"]} m="auto">
            <Text
              textTransform={"uppercase"}
              color={"white.400"}
              border="1px solid black"
              fontWeight={600}
              textAlign="center"
              width="200px"
              m={"auto"}
              mb={16}
              fontSize={"sm"}
              bg={useColorModeValue("blue.50", "blue.900")}
              p={2}
              alignSelf={"flex-start"}
              rounded={"md"}
            >
              Github Calander
            </Text>
          </Stack>
          <Githubcalendar
            username="vivekjawale"
            style={{width: "100%", margin : "auto"}}
            blockMargin={5}
            fontSize={16}
          />
          <Stack spacing={4} w={["100%"]} m="auto">
            <Text
              textTransform={"uppercase"}
              color={"white.400"}
              border="1px solid black"
              fontWeight={600}
              textAlign="center"
              width="200px"
              m={"auto"}
              mt={16}
              mb={8}
              fontSize={"sm"}
              bg={useColorModeValue("blue.50", "blue.900")}
              p={2}
              alignSelf={"flex-start"}
              rounded={"md"}
            >
              Github Stats
            </Text>
          </Stack>
          <Flex
            direction={["column", "column","column","column", "row"]}
            alignItems="center"
            justifyContent={"center"}
            gap="20px"
            border={"1px solid gray"}
            padding="10px"
            m={4}
            borderRadius={"20px"}
            boxShadow= "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
          >
            <Image
              src="https://github-readme-stats.vercel.app/api?username=vivekjawale&show_icons=true&locale=en"
              alt="vivek"
              w={"100%"}
              borderRadius={"20px"}
            />
            <Image
              src="https://github-readme-streak-stats.herokuapp.com/?user=vivekjawale&"
              alt="vivek"
              w={"100%"}
              borderRadius={"20px"}
            />
          </Flex>
        </Box>
      </>
    );
  };
  
  export default Github;
