import { Flex } from "@chakra-ui/react";
import { Typewriter } from "react-simple-typewriter";
import { DeskSetupSection } from "./DeskSetupSection";
import { Footer } from "./Footer";

export const Home = () => {
  return (
    <Flex w="100%" direction="column" align="center">
      {/* Navigation / Typewriter */}
      <Flex as="nav" w="100%" py={6} justify="center">
        <Flex
          w="100%"
          maxW="800px"
          px={4}
          align="center"
          justify="space-between"
        >
          <div
            style={{ fontSize: "30px", fontWeight: "650", marginTop: "-5px" }}
          >
            <Typewriter
              words={["Hello, Ferdaws Here"]}
              loop={1}
              cursor
              cursorStyle="_"
              typeSpeed={50}
              deleteSpeed={50}
            />
          </div>
        </Flex>
      </Flex>
      {/* Desk Setup Section */}
      <Flex justify="center" px={4}>
        <Flex maxW="800px" w="100%" direction="column">
          <DeskSetupSection />
        </Flex>
      </Flex>
      <Footer />
    </Flex>
  );
};
