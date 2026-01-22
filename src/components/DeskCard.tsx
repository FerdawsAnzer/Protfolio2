import { Box } from "@chakra-ui/react";
import type { DeskSetup } from "src/Types/DeskSetup";
import { Grid, Text, Image } from "@chakra-ui/react";
type Props = {
  desk: DeskSetup;
};

export function DeskCard({ desk }: Props) {
  return (
    <div className="desk-card">
      <Box borderRadius="md" overflow="hidden" mb={2} h="350px" w="560px">
        <img
          src={desk.image}
          alt={desk.title}
          style={{
            height: "100%",
            width: "100%",
          }}
        />
      </Box>
      <Grid templateColumns="repeat(4, 2fr)" gap="4" mt={10} mb={10}>
        {desk.tools.map((tool) => (
          <Box
            key={tool.name}
            h="80px"
            w="180px"
            borderRadius="md"
            overflow="hidden"
            cursor="pointer"
            border="2px solid transparent"
            position="relative"
            _hover={{ borderColor: "teal.400", cursor: "pointer" }}
            role="group"
          >
            <Image
              src={tool.image}
              alt={tool.name}
              w="100%"
              h="100%"
              objectFit="cover"
              transition="filter 0.3s"
              _groupHover={{ filter: "blur(2px)" }}
            />

            <Box
              position="absolute"
              inset={0}
              bg="rgba(0,0,0,0.5)"
              display="flex"
              alignItems="center"
              justifyContent="center"
              opacity={0}
              transition="opacity 0.3s"
              _groupHover={{ opacity: 1 }}
            >
              <Text color="black" role="group" fontWeight="bold">
                {tool.name}
              </Text>
            </Box>
          </Box>
        ))}
      </Grid>
    </div>
  );
}
