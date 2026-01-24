import { Box } from "@chakra-ui/react";
import type { DeskSetup } from "src/Types/DeskSetup";
import { Grid, Text, Image } from "@chakra-ui/react";
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
        h="350px"
        w="560px"
        ml={55}
      >
        <img
          src={desk.image}
          alt={desk.title}
          style={{
            height: "100%",
            width: "100%",
          }}
        />
      </Box>
      <h1 style={{ fontSize: "20px", fontWeight: "450", marginLeft: 129 }}>
        Desk setup visual generated using the <b>Setuply</b> app.
      </h1>
      <Grid templateColumns="repeat(4, 2fr)" gap="4" mt={10} mb={10}>
        {desk.tools.map((tool) => (
          <Box
            key={tool.name}
            h="120px"
            w="180px"
            position="relative"
            borderRadius="md"
            overflow="hidden"
            border="2px solid transparent"
            cursor="pointer"
            _hover={{
              borderColor: "white",
              "& .overlay": {
                opacity: 1,
              },
              "& img": {
                filter: "blur(2px)",
              },
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
