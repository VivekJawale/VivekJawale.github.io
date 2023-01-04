import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import styles from "./Stats.module.css";
import "aos/dist/aos.css";
import GitHubCalendar from "react-github-calendar";

const Stats = () => {

  return (
    <>
      <SimpleGrid columns={[2, 4, 4]} className={styles.stats}>
        <Box >
          <Box className={styles.achievement}>
            <Box className={styles.circle} style={{ color: "#facc15 " }}>
              1200+
            </Box>
            <span>
              <Text fontSize="x-large" fontWeight="bolder">
                Hours of
              </Text>
            </span>
            <span>
              <Text fontSize="x-large">Coding</Text>
            </span>
          </Box>
        </Box>

        <Box >
          <Box className={styles.achievement}>
            <Box className={styles.circle} style={{ color: "#facc15 " }}>
              50+
            </Box>
            <span>
              <Text fontSize="x-large" fontWeight="bolder">
                Github
              </Text>
            </span>
            <span>
              <Text fontSize="x-large" color={"#f4e16a"}>
                Commits
              </Text>
            </span>
          </Box>
        </Box>

        <Box >
          <Box className={styles.achievement}>
            <Box className={styles.circle} style={{ color: "#facc15 " }}>
              4
            </Box>
            <span>
              <Text fontSize="x-large" fontWeight="bolder">
                Projects
              </Text>
            </span>
            <span>
              <Text fontSize="x-large" color={"#f4e16a"}>
                Done
              </Text>
            </span>
          </Box>
        </Box>

        <Box >
          <Box className={styles.achievement}>
            <Box className={styles.circle} style={{ color: "#facc15 " }}>
              110+
            </Box>
            <span>
              <Text fontSize="x-large" fontWeight="bolder">
                Hours of
              </Text>
            </span>
            <span>
              <Text fontSize="x-large" color={"#f4e16a"}>
                Soft skills
              </Text>
            </span>
          </Box>
        </Box>
      </SimpleGrid>

      <Box mb={10}>
        <Text
          mt={5}
          fontSize={"xx-large"}
          fontWeight="semibold"
          color={"#f4e16a"}
          textAlign="center"
        >
          GITHUB STATS
        </Text>
      </Box>

      <Box width={["95%", "80%", "65%"]} m="auto" mb={"20px"}>
        <GitHubCalendar username="VivekJawale" />
      </Box>
      {/* <Flex width={"90%"} >
        
         
         
    </Flex> */}
      <SimpleGrid columns={[1, 2, 2, 3]} className={styles.stats}>
        <Box>
          <Image
            height={40}
            src="https://github-readme-stats.vercel.app/api?username=VivekJawale&include_all_commits=false&count_private=false"
          ></Image>
        </Box>
        <Box>
          <Image
            height={40}
            src="https://streak-stats.demolab.com/?user=VivekJawale"
          ></Image>
        </Box>
        <Box>
          <Image
            height={40}
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=VivekJawale&include_all_commits=false&count_private=false&layout=compact"
          ></Image>
        </Box>
      </SimpleGrid>
    </>
  );
};

export default Stats;
