import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import { EffectCards, Pagination } from "swiper/modules";

import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Text,
  Image,
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
      style={{ width: "300px", height: "400px" }}
    >
      {CardData.map((card: CardsInfo, index: number) => (
        <SwiperSlide key={index}>
          <Card.Root
            maxW="sm"
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
              <Image src={card.image} borderRadius="lg" mb={3} />
              <Text>{card.description}</Text>
              <Text>{card.stack}</Text>
            </CardBody>
          </Card.Root>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SlideCards;
