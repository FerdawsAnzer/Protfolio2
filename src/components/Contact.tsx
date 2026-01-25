import {
  Box,
  Flex,
  Icon,
  SimpleGrid,
  HStack,
  Text,
  VStack,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import { Footer } from "./Footer";
import { FaDiscord, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";

export const Contact = () => {
  const items = [
    { icon: FaEnvelope, text: "Email", link: "mailto:firdawsanzar@gmail.com" },
    {
      icon: FaLinkedin,
      text: "LinkedIn",
      link: "https://www.linkedin.com/in/ferdaws-anzer-71152b29b/",
    },
    { icon: FaGithub, text: "Github", link: "https://github.com/FerdawsAnzer" },
    {
      icon: FaDiscord,
      text: "Discord",
      link: "https://discordapp.com/users/1234567890",
    },
  ];

  return (
    <Flex as="nav" w="100%" py={6} justify="center">
      <Flex w="100%" maxW="800px" px={4} direction="column">
        <VStack align="start" mb={6}>
          <Text fontSize="28px" fontWeight="650">
            Contact
          </Text>
          <Text fontSize="17px" fontWeight="450" color="gray.600">
            Let's connect.
          </Text>
          <Text fontSize="17px" fontWeight="450" color="gray.600">
            Let’s connect — you can find me on the platforms below.
          </Text>
        </VStack>

        <SimpleGrid columns={2} gap="20px" mb={180}>
          {items.map((item) => (
            <LinkBox
              key={item.text}
              height="70px"
              width="90%"
              borderRadius="md"
              overflow="hidden" // CRITICAL
            >
              <Box
                h="100%"
                w="100%"
                bg="white"
                color="black"
                border="1px solid #7f7f7fff"
                display="flex"
                alignItems="center"
                justifyContent="center"
                transition="transform 0.25s ease, box-shadow 0.25s ease"
                _hover={{
                  transform: "scale(1.05)",
                  boxShadow: "lg",
                }}
                _active={{
                  transform: "scale(1.02)",
                }}
              >
                <HStack>
                  <Icon as={item.icon} w={6} h={6} />
                  <LinkOverlay
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Text>{item.text}</Text>
                  </LinkOverlay>
                </HStack>
              </Box>
            </LinkBox>
          ))}
        </SimpleGrid>

        <Footer />
      </Flex>
    </Flex>
  );
};
