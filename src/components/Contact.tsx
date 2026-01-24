import { Box, Flex, Grid } from "@chakra-ui/react";
import { Footer } from "./Footer";

export const Contact = () => {
  return (
    <Flex as="nav" w="100%" py={6} justify="center">
      <Flex
        w="100%"
        maxW="800px" // ← Fixed width, centered
        px={4}
        direction="column"
      >
        <Grid templateColumns="repeat(2, 1fr)" gap="6">
          <Box h="20" />
          <Box h="20" />
          <Box h="20" />
        </Grid>
        <Footer />
      </Flex>
    </Flex>
  );
};
