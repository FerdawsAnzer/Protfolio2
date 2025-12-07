import { Flex } from "@chakra-ui/react";
import { Typewriter } from "react-simple-typewriter";

export const Home = () => {
  return (
    <Flex as="nav" w="100%" py={6} justify="center">
      {/* Inner container with fixed width */}
      <Flex
        w="100%"
        maxW="800px" // ← Fixed width, centered
        px={4}
        align="center"
        justify="space-between"
      >
        <div style={{ fontSize: "30px", fontWeight: "650", marginTop: "-5px" }}>
          <Typewriter
            words={["Hello,Ferdaws Here"]}
            loop={1} // type once
            cursor
            cursorStyle="_"
            typeSpeed={50}
            deleteSpeed={50}
          />
        </div>
      </Flex>
    </Flex>
  );
};
