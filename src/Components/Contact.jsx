import { Box, Grid, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { Flex, Stat, StatLabel, StatNumber } from "@chakra-ui/react";
import { BsPhoneFill } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { MdEmail } from "react-icons/md";

const StatsCard = ({ title, stat, icon }) => {
    return (
        <Stat
            px={{ base: 2, md: 4 }}
            py={"5"}
            boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            border={"1px solid"}
            borderColor={useColorModeValue("gray.800", "gray.500")}
            rounded={"lg"}
        >
            <Flex justifyContent={"space-between"}>
                <Box pl={{ base: 2, md: 4 }}>
                    <StatLabel fontWeight={"medium"} isTruncated>
                        {title}
                    </StatLabel>
                    <StatNumber fontSize={"xl"} fontWeight={"medium"}>
                        {stat}
                    </StatNumber>
                </Box>
                <Box
                    my={"auto"}
                    color={useColorModeValue("gray.800", "gray.200")}
                    alignContent={"center"}
                >
                    {icon}
                </Box>
            </Flex>
        </Stat>
    );
}

const Contact = () => {
    return (
        <div id="contact">
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
                        mb={4}
                        mt={12}
                        fontSize={"sm"}
                        bg={useColorModeValue("blue.50", "blue.900")}
                        p={2}
                        alignSelf={"flex-start"}
                        rounded={"md"}
                    >
                        Connect With Vivek
                    </Text>
                </Stack>

                <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
                    <Grid
                        gridTemplateColumns={[
                            "repeat(1,1fr)",
                            "repeat(1,1fr)",
                            "repeat(1,1fr)",
                            "repeat(1,1fr)",
                            "repeat(3,1fr)",
                        ]}
                        gap={8}
                    >
                        <StatsCard
                            title={"Mobile Number"}
                            stat={"+91-8390663831"}
                            icon={<BsPhoneFill size={"3em"} />}
                        />
                        <StatsCard
                            title={"Email Id"}
                            stat={"vivekjawale41@gmail.com"}
                            icon={<MdEmail size={"3em"} />}
                        />
                        <StatsCard
                            title={"Location"}
                            stat={"Buldhana, Maharashtra"}
                            icon={<GoLocation size={"3em"} />}
                        />
                    </Grid>
                </Box>
            </Box>
        </div>
    );
};

export default Contact;