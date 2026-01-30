import { Flex, Text } from "@chakra-ui/react";
import { Timeline } from "@chakra-ui/react";

export const TimeLine = () => {
  return (
    <Flex as="section" w="100%" py={10} justify="center">
      <Flex w="100%" maxW="800px" px={4} direction="column" gap={6}>
        <Timeline.Root colorPalette="purple" variant="outline" size="sm">
          {/* 1 — Software Developer Intern */}
          <Timeline.Item>
            <Timeline.Content flex="1">
              <Timeline.Title fontWeight="bold">
                Software Developer Intern — EventokenX
              </Timeline.Title>
              <Text fontSize="sm" color="gray.600">
                Lyon, France | June – August 2025
              </Text>
              <Text fontSize="sm">
                Designed mobile UIs with Unity & Flutter, integrated REST APIs,
                created prototypes, and conducted user-testing sessions in an
                Agile team.
              </Text>
            </Timeline.Content>

            <Timeline.Connector>
              <Timeline.Separator />
              <Timeline.Indicator bg="#e7f526ff" borderColor="#B794F4" />
            </Timeline.Connector>

            <Timeline.Content flex="1" />
          </Timeline.Item>

          {/* 2 —Hotel Management System */}
          <Timeline.Item>
            <Timeline.Content flex="1" />
            <Timeline.Connector
              _before={{
                bgGradient: "linear(to-b, #7A5AF5, #B794F4)",
              }}
            >
              <Timeline.Separator />
              <Timeline.Indicator bg="#062076ff" borderColor="#B794F4" />
            </Timeline.Connector>

            <Timeline.Content flex="1">
              <Timeline.Title fontWeight="bold">
                Hotel Management System (PMS)
              </Timeline.Title>
              <Text fontSize="sm" color="gray.600">
                Internship Project | Sept 2025 – Present
              </Text>
              <Text fontSize="sm">
                Built hotel operations UI using React, Zustand & Supabase;
                implemented secure authentication (JWT/OAuth2), CI/CD pipelines,
                and AWS deployment.
              </Text>
            </Timeline.Content>
          </Timeline.Item>

          {/* 4 — Banking Management System (NEW ONE HERE) */}
          <Timeline.Item>
            <Timeline.Content flex="1" />
            <Timeline.Connector
              _before={{
                bgGradient: "linear(to-b, #7A5AF5, #B794F4)",
              }}
            >
              <Timeline.Separator />
              <Timeline.Indicator bg="#5accf5ff" borderColor="#B794F4" />
            </Timeline.Connector>

            <Timeline.Content flex="1">
              <Timeline.Title fontWeight="bold">
                Banking Management System — Team Project
              </Timeline.Title>
              <Text fontSize="sm" color="gray.600">
                Nicosia, Cyprus | May 2025
              </Text>
              <Text fontSize="sm">
                Built secure login, transaction management, and role-based
                permissions using Node.js and MySQL. Developed the frontend and
                linked it to the backend for real-time operations. Collaborated
                using Git and Agile practices.
              </Text>
            </Timeline.Content>
          </Timeline.Item>
        </Timeline.Root>
      </Flex>
    </Flex>
  );
};
