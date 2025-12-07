import { Flex } from "@chakra-ui/react";
import { Fade } from "react-awesome-reveal";
import SlideCards from "./SlideCrads";
import { TimeLine } from "./TimeLine";

export const About = () => {
  return (
    <Flex as="nav" w="100%" py={6} justify="center">
      <Flex
        w="100%"
        maxW="800px" // ← Fixed width, centered
        px={4}
        direction="column"
      >
        <Fade duration={1500}>
          <h1 style={{ fontSize: "30px", fontWeight: "650" }}>About me</h1>
          <h2>Who I am</h2>
        </Fade>
        {/*Do a Fade for SlideCard */}
        <SlideCards />
        <TimeLine />
      </Flex>
    </Flex>
  );
};
