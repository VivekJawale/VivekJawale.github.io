import {
    Box,
    SimpleGrid,
    Text,
    Stack,
    Flex,
    useColorModeValue,
    Image,
} from "@chakra-ui/react";

const Education = () => {
    return (
        <>
            <Box width="100%" m="auto" padding={["5", "5", "20"]}>
                <Stack spacing={4} w={["100%"]} m="auto">
                    <Text
                        textTransform={"uppercase"}
                        color={"white.400"}
                        border="1px solid black"
                        fontWeight={600}
                        fontSize={"sm"}
                        bg={useColorModeValue("blue.50", "blue.900")}
                        p={2}
                        alignSelf={"flex-start"}
                        rounded={"md"}
                    >
                        Education 
                    </Text>
                </Stack>
                <Box p={4} mt={8} width="100%" >
                    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={20}>
                        <Stack>
                            <Flex
                                w={16}
                                h={16}
                                align={"center"}
                                justify={"center"}
                                color={"white"}
                                rounded={"full"}
                                bg={"gray.100"}
                                mb={1}
                            >
                                <Image src="https://masaischool.com/img/navbar/logo.svg" alt="logo" />
                            </Flex>
                            <Text fontWeight={600} fontSize={"20px"}>
                                Full-Stack Web Development (Full-Time)
                            </Text>
                            <Text fontWeight={300} fontSize={"16px"}>
                                Bengaluru - Masai School (Full Time)
                            </Text>
                            <Text fontWeight={100} fontSize={"15px"}>
                                May 2022 - Present
                            </Text>

                            <Text color={"white.100"} fontWeight={400} fontSize={"17px"}>
                                I enrolled full-time in a MERN Full Stack Web Development course at Masai School.
                            </Text>
                        </Stack>
                        <Stack>
                            <Flex
                                w={16}
                                h={16}
                                align={"center"}
                                justify={"center"}
                                color={"white"}
                                rounded={"full"}
                                bg={"gray.100"}
                                mb={1}
                            >
                                <Image src="https://upload.wikimedia.org/wikipedia/en/9/9b/Yashwantrao_Chavan_Maharashtra_Open_University_logo.png" alt="logo" />
                            </Flex>
                            <Text fontWeight={600} fontSize={"20px"}>
                                Bachelor of Arts (Humanities and Social Sciences )
                            </Text>
                            <Text fontWeight={300} fontSize={"16px"}>
                                Nashik, Maharashtra
                            </Text>
                            <Text fontWeight={100} fontSize={"15px"}>
                                2019 - 2022
                            </Text>

                            <Text color={"white.100"} fontWeight={400} fontSize={"17px"}>
                                I have completed my graduation from Yashwantrao Chavan Open University in Nashik.
                            </Text>
                        </Stack>
                        <Stack>
                            <Flex
                                w={16}
                                h={16}
                                align={"center"}
                                justify={"center"}
                                color={"white"}
                                rounded={"full"}
                                bg={"gray.100"}
                                mb={1}
                            >
                                <Image borderRadius="50%" src="https://www.gcoej.ac.in/media/logo-dark.png" alt="logo" />
                            </Flex>
                            <Text fontWeight={600} fontSize={"20px"}>
                                B.Tech (Instrumentation Enginnering)
                            </Text>
                            <Text fontWeight={300} fontSize={"16px"}>
                                Government College Of Engineering Jalgaon
                            </Text>
                            <Text fontWeight={100} fontSize={"15px"}>
                                2015 - 2018 (Drop-Out)
                            </Text>

                            <Text color={"white.100"} fontWeight={400} fontSize={"17px"}>
                                I attended Government College of Engineering for Instrumentation Engineering, but I was not comfortable there, so I quit after 2 years.
                            </Text>
                        </Stack>
                        <Stack>
                            <Flex
                                w={16}
                                h={16}
                                align={"center"}
                                justify={"center"}
                                color={"white"}
                                rounded={"full"}
                                bg={"gray.100"}
                                mb={1}
                            >
                                <Image borderRadius="50%" src="http://www.svmbhadrajun.com/images/logo.png" alt="logo" />
                            </Flex>
                            <Text fontWeight={600} fontSize={"20px"}>
                                Higher Secondary - Science
                            </Text>
                            <Text fontWeight={300} fontSize={"16px"}>
                                Shri Saraswati Junior college Janephal
                            </Text>
                            <Text fontWeight={100} fontSize={"15px"}>
                                2013 - 2015
                            </Text>

                            <Text color={"white.100"} fontWeight={400} fontSize={"17px"}>
                                I completed my higher secondary schooling with 68% in the PCMB group.
                            </Text>
                        </Stack>
                    </SimpleGrid>
                </Box>
            </Box>
        </>
    );
};

export default Education;