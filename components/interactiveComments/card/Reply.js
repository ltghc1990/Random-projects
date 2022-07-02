import React from "react";
import { Button } from "@chakra-ui/react";

const Reply = ({ toggleReply }) => {
  console.log(toggleReply);
  return (
    <Button
      leftIcon={<ReplyIcon />}
      variant="outline"
      colorScheme="gray"
      _hover={{ color: "black" }}
      border="4"
      borderColor={"black"}
      onClick={toggleReply}
    >
      Reply
    </Button>
  );
};

export default Reply;

const ReplyIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
