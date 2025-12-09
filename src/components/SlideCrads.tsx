import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import { EffectCards, Pagination } from "swiper/modules";

import {
  Card,
  Heading,
  Text,
  Image,
  HStack,
  Badge,
  Box,
  Tooltip,
  CardHeader,
  CardBody,
} from "@chakra-ui/react";

import { CardData } from "../cardsData";
import type { CardsInfo } from "../Types/CardsInfo";

const SlideCards = () => {
  return (
    <Swiper
      effect="cards"
      grabCursor={true}
      modules={[EffectCards, Pagination]}
      pagination={{ clickable: true, type: "fraction" }}
      className="mySwiper"
      style={{ width: "300px", height: "350px" }}
    >
      {CardData.map((card: CardsInfo, index: number) => (
        <SwiperSlide key={index}>
          <Box w="100%" h="100%" perspective="1000px">
            <Box
              w="100%"
              h="100%"
              position="relative"
              transition="transform 0.6s"
              transformStyle="preserve-3d"
              _hover={{ transform: "rotateY(180deg)" }}
            >
              {/* Front */}
              <Card.Root
                position="absolute"
                w="100%"
                h="100%"
                backfaceVisibility="hidden"
                boxShadow="lg"
                borderRadius="xl"
                overflow="hidden"
              >
                <CardHeader>
                  <Heading size="md">{card.title}</Heading>
                  <Text fontSize="sm" color="gray.500">
                    {card.date}
                  </Text>
                </CardHeader>
                <CardBody>
                  <Image
                    src={card.image}
                    borderRadius="lg"
                    mb={3}
                    h="200px"
                    objectFit="cover"
                  />
                </CardBody>
              </Card.Root>

              {/* Back */}
              <Card.Root
                position="absolute"
                w="100%"
                h="100%"
                backfaceVisibility="hidden"
                transform="rotateY(180deg)"
                boxShadow="lg"
                borderRadius="xl"
                overflow="hidden"
                p={4}
              >
                <Text mb={3}>{card.description}</Text>
                <HStack wrap="wrap">
                  {card.stack.split(",").map((tech: string) => (
                    <Tooltip.Root key={tech}>
                      <Badge colorScheme="teal">{tech}</Badge>
                    </Tooltip.Root>
                  ))}
                </HStack>
              </Card.Root>
            </Box>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SlideCards;
