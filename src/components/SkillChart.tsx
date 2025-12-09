import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  ProgressCircle,
} from "@chakra-ui/react";

import type { Skill } from "../Types/Skill";

const skills: Skill[] = [
  { name: "React", level: 85, color: "blue.400" },
  { name: "TypeScript", level: 75, color: "cyan.400" },
  { name: "JavaScript", level: 80, color: "yellow.400" },
  { name: "HTML", level: 90, color: "pink.400" },
  { name: "CSS", level: 88, color: "purple.400" },
  { name: "MySQL", level: 75, color: "red.400" },
  { name: "Node.js", level: 70, color: "green.400" },
  { name: "PHP", level: 60, color: "orange.400" },
];
export const SkillChart = () => {
  return (
    <Box p={6}>
      <Heading size="lg" mb={6}>
        Skills
      </Heading>

      <SimpleGrid columns={[2, 3, 4]} gap={10}>
        {skills.map((skill) => (
          <Box key={skill.name} textAlign="center">
            <ProgressCircle.Root value={skill.level} size="lg">
              <ProgressCircle.Circle>
                <ProgressCircle.Track />
                <ProgressCircle.Range />
              </ProgressCircle.Circle>
            </ProgressCircle.Root>

            <Text mt={2} fontSize="sm" fontWeight="bold">
              {skill.name}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};
