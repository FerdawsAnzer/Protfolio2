import { Box, Grid, Text, Image } from "@chakra-ui/react";
import type { DeskSetup } from "src/Types/DeskSetup";

type Props = {
  desk: DeskSetup;
};

export function DeskCard({ desk }: Props) {
  return (
    <div className="desk-card">
      <Box
        borderRadius="md"
        overflow="hidden"
        mb={2}
        // Responsive width & height
        w={{ base: "90%", md: "560px" }}
        h={{ base: "250px", md: "350px" }}
        mx="auto" // center horizontally
      >
        <Image
          src={desk.image}
          alt={desk.title}
          w="100%"
          h="100%"
          objectFit="cover"
        />
      </Box>

      <Text
        fontSize={{ base: "16px", md: "20px" }}
        fontWeight="450"
        textAlign="center"
        mt={2}
      >
        My study setup inspiration for coding and design <b>Setuply</b> app.
      </Text>

      <Grid
        templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 2fr)" }}
        gap="4"
        mt={10}
        mb={10}
      >
        {desk.tools.map((tool) => (
          <Box
            key={tool.name}
            h={{ base: "100px", md: "120px" }}
            w="100%"
            position="relative"
            borderRadius="md"
            overflow="hidden"
            border="2px solid transparent"
            cursor="pointer"
            _hover={{
              borderColor: "white",
              "& .overlay": { opacity: 1 },
              "& img": { filter: "blur(2px)" },
            }}
          >
            <Image
              src={tool.image}
              alt={tool.name}
              w="100%"
              h="100%"
              objectFit="cover"
              transition="filter 0.3s"
            />
            <Box
              className="overlay"
              position="absolute"
              inset="0"
              bg="blackAlpha.700"
              display="flex"
              alignItems="center"
              justifyContent="center"
              opacity="0"
              transition="opacity 0.3s ease"
            >
              <Text color="white" fontWeight="bold">
                {tool.name}
              </Text>
            </Box>
          </Box>
        ))}
      </Grid>
    </div>
  );
}
