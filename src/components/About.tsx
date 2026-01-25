import { Flex } from "@chakra-ui/react";
import { Fade } from "react-awesome-reveal";
import SlideCards from "./SlideCrads";
import { TimeLine } from "./TimeLine";
import { SkillChart } from "./SkillChart";
import { Footer } from "./Footer";

export const About = () => {
  return (
    <Flex as="nav" w="100%" py={6} justify="center">
      <Flex
        w="100%"
        maxW="800px" // ← Fixed width, centered
        px={4}
        direction="column"
      >
        <Fade duration={1500} triggerOnce>
          <h1 style={{ fontSize: "30px", fontWeight: "650" }}>About me</h1>
        </Fade>
        {/*Do a Fade for SlideCard */}
        <Fade duration={1500} delay={1400} triggerOnce>
          <SlideCards />
        </Fade>
        <Fade duration={1500} delay={2300} triggerOnce>
          <TimeLine />
        </Fade>
        <Fade duration={1500} delay={2300} triggerOnce>
          <SkillChart />
        </Fade>

        <Footer />
      </Flex>
    </Flex>
  );
};
