import { Badge, Box, Button, Card, HStack, Image } from "@chakra-ui/react";
import type { ProjectCardInfos } from "src/Types/projectCardInfos";
type Props = {
  project: ProjectCardInfos;
};
export const ProjectCard = ({ project }: Props) => {
  return (
    <Card.Root
      flexDirection="row"
      overflow="hidden"
      maxW="xl"
      h="228px"
      boxShadow="lg"
      borderRadius="xl"
    >
      <Image
        objectFit="cover"
        maxW="200px"
        src={project.image}
        alt="Caffe Latte"
      />
      <Box>
        <Card.Body p="6">
          <Card.Title mb="2">{project.title}</Card.Title>
          <Card.Description>{project.description}</Card.Description>
          <HStack mt="4">
            <Badge color="blue.500">{project.stack[0]}</Badge>
            <Badge color="green.500">{project.stack[1]}</Badge>
            <Badge color="purple.500">{project.stack[2]}</Badge>
          </HStack>
        </Card.Body>
        <Card.Footer>
          <Button>Live Demo</Button>
        </Card.Footer>
      </Box>
    </Card.Root>
  );
};
