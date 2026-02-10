import { Heading, HStack, Image, Text, VStack, Link, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack spacing={4} align="start" bg='white' color='black'>
      <Image src={imageSrc} alt={title} borderRadius="xl" />

      <Box  p='2'>
        <Heading>{title}</Heading>
        <Text>{description}</Text>

        <Link href="#" _hover={{ textDecoration: "none" }}>
          <HStack spacing={2}>
            <Text>See more</Text>
            <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </HStack>
        </Link>
      </Box>
    </VStack>
  );
};

export default Card;