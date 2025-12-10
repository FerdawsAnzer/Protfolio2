import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  ProgressCircle,
  VStack,
  AbsoluteCenter,
  Icon,
} from "@chakra-ui/react";
import { skillCategories } from "../SkillsData";
import { useEffect, useRef, useState } from "react";

export const SkillChart = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // 2D array for each skill's animated value
  const [animatedSkills, setAnimatedSkills] = useState<number[][]>(
    skillCategories.map((cat) => cat.items.map(() => 0))
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Animate each skill with a staggered delay
          skillCategories.forEach((category, catIndex) => {
            category.items.forEach((skill, skillIndex) => {
              const delay =
                (skillIndex + catIndex * category.items.length) * 200; // 200ms per item
              setTimeout(() => {
                setAnimatedSkills((prev) => {
                  const newState = [...prev];
                  newState[catIndex][skillIndex] = skill.level;
                  return newState;
                });
              }, delay);
            });
          });
        } else {
          // Reset to 0 when section leaves viewport
          setAnimatedSkills(
            skillCategories.map((cat) => cat.items.map(() => 0))
          );
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Box p={6} ref={sectionRef}>
      <Heading size="lg" mb={6}>
        Skills
      </Heading>
      <VStack align="stretch">
        {skillCategories.map((category, catIndex) => (
          <Box key={category.title}>
            <Heading size="md" mb={4}>
              {category.title}
            </Heading>
            <SimpleGrid columns={[2, 3, 4]} gap={10}>
              {category.items.map((skill, skillIndex) => (
                <Box
                  key={skill.name}
                  textAlign="center"
                  p={6}
                  rounded="xl"
                  shadow="md"
                  _hover={{
                    transform: "scale(1.08)",
                    shadow: "xl",
                  }}
                  bg="rgba(15, 23, 42, 0.6)"
                  backdropFilter="blur(6px)"
                  border="1px solid rgba(255,255,255,0.05)"
                  boxShadow="0 8px 30px rgba(0,0,0,0.25)"
                  // soft shadow to lift the card
                  borderRadius="2xl" // rounded corners for modern look
                >
                  <ProgressCircle.Root
                    size="xl"
                    value={animatedSkills[catIndex][skillIndex]}
                    transition="all 0.8s ease-in-out"
                  >
                    <ProgressCircle.Circle>
                      <ProgressCircle.Track />
                      <ProgressCircle.Range stroke={skill.color} />
                    </ProgressCircle.Circle>
                    <AbsoluteCenter>
                      <ProgressCircle.ValueText
                        fontSize="lg"
                        fontWeight="bold"
                        color="gray.200"
                      />
                    </AbsoluteCenter>
                  </ProgressCircle.Root>

                  <Text
                    mt={4}
                    fontSize="sm"
                    fontWeight="semibold"
                    color="gray.200"
                  >
                    <Icon as={skill.icon} boxSize={8} color={skill.color} />{" "}
                    {skill.name}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};
