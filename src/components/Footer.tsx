import { Flex, Icon, Link } from "@chakra-ui/react";
import { Fade } from "react-awesome-reveal";

import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <Fade>
      <Flex
        as="footer"
        w="100%"
        py={1}
        justify="center"
        align="center"
        gap={6}
        mb="-2"
      >
        <Link
          href="https://github.com/FerdawsAnzer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            as={FaGithub}
            boxSize={5}
            _hover={{ color: "black", transform: "scale(1.25)" }}
          />
        </Link>
        <Link>
          <Icon
            as={FaDiscord}
            boxSize={5}
            _hover={{ color: "black", transform: "scale(1.25)" }}
          />
        </Link>
        <Link
          href="mailto:firdawsanzar@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            as={FaEnvelope}
            boxSize={5}
            _hover={{ color: "black", transform: "scale(1.25)" }}
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/ferdaws-anzer-71152b29b"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            as={FaLinkedin}
            boxSize={5}
            _hover={{
              color: "black",
              transform: "scale(1.25)",
              cursor: "pointer",
            }}
          />
        </Link>
      </Flex>
      <Flex as="footer" w="100%" py={3} justify="center" align="center" mb="-3">
        <p>© 2025 Ferdaws Anzer. All rights reserved. </p>
      </Flex>
    </Fade>
  );
};
