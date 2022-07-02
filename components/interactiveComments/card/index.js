import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";

// components
import Voting from "./Voting";
import Profile from "./profile";

// all the stuff goes in here
const Card = () => {
  return (
    <Flex maxW="3xl" shadow="2xl" p="4" rounded="md" mx="auto" my="4">
      <Voting />

      <div>
        <Profile />
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis,
          placeat debitis! Incidunt ab nesciunt sunt ipsam illo reiciendis
          deleniti nihil dolor eveniet nam labore, explicabo, velit nobis.
          Necessitatibus eaque distinctio commodi ex voluptates voluptatum vitae
          nesciunt, consequuntur quod deleniti ipsa voluptatem? Dicta, pariatur!
          Porro, quis!
        </Text>
      </div>
    </Flex>
  );
};

export default Card;
