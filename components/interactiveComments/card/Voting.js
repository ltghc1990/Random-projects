import React from "react";
import { Flex, Box, IconButton } from "@chakra-ui/react";

const Voting = () => {
  return (
    <Flex direction="column" justify="center" align="center" w="10" m="4">
      <IconButton aria-label="upvote" icon={<PlusIcon />} />

      <Flex
        w="9"
        h="9"
        bg="blackAlpha.400"
        justify="center"
        align="center"
        fontWeight="bold"
      >
        5
      </Flex>
      <IconButton aria-label="downvote" icon={<MinusIcon />} />
    </Flex>
  );
};

export default Voting;

const PlusIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
        clipRule="evenodd"
      />
    </svg>
  );
};

const MinusIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
        clipRule="evenodd"
      />
    </svg>
  );
};
