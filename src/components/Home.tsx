import { Flex, Text } from "@chakra-ui/react";
import { Typewriter } from "react-simple-typewriter";
import { DeskSetupSection } from "./DeskSetupSection";
import { Footer } from "./Footer";

export const Home = () => {
  return (
    <Flex w="100%" direction="column" align="center">
      {/* Navigation / Typewriter */}
      <Flex
        as="nav"
        w="100%"
        py={{ base: 4, md: 6 }}
        justify="center"
        px={{ base: 2, md: 0 }}
      >
        <Flex
          w="100%"
          maxW={{ base: "95%", md: "800px" }}
          align="center"
          justify="left"
        >
          <Text
            fontSize={{ base: "20px", md: "30px" }}
            fontWeight="650"
            textAlign="start"
          >
            <Typewriter
              words={["Hello, Ferdaws Here"]}
              loop={1}
              cursor
              cursorStyle="_"
              typeSpeed={50}
              deleteSpeed={50}
            />
          </Text>
        </Flex>
      </Flex>

      {/* Desk Setup / Projects Section */}
      <Flex justify="center" px={{ base: 2, md: 4 }} w="100%" mb={6}>
        <Flex maxW={{ base: "95%", md: "800px" }} w="100%" direction="column">
          <DeskSetupSection />
        </Flex>
      </Flex>

      {/* Footer */}
      <Footer />
    </Flex>
  );
};
