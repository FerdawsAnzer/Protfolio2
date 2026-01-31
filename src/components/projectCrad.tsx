import {
  Badge,
  Box,
  Card,
  HStack,
  Image,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import type { ProjectCardInfos } from "src/Types/projectCardInfos";

type Props = {
  project: ProjectCardInfos;
};

export const ProjectCard = ({ project }: Props) => {
  return (
    <LinkBox as="article" w="100%">
      <Card.Root
        w="100%"
        flexDirection="row"
        overflow="hidden"
        h="240px"
        boxShadow="lg"
        borderRadius="xl"
        cursor="pointer"
        _hover={{ boxShadow: "xl" }}
      >
        <Image
          objectFit="cover"
          w="100%"
          maxW="250px"
          src={project.image}
          alt={project.title}
        />

        <Box>
          <Card.Body p="6">
            {/* This makes the whole card clickable */}
            <Card.Title mb="2">
              <LinkOverlay href={project.githubUrl}>
                {project.title}
              </LinkOverlay>
            </Card.Title>

            <Card.Description>{project.description}</Card.Description>

            <HStack mt="4">
              {project.stack.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </HStack>
          </Card.Body>
        </Box>
      </Card.Root>
    </LinkBox>
  );
};
