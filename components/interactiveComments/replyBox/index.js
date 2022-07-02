import React, { useState } from "react";
import { motion } from "framer-motion";
import { Flex, Button, HStack, FormControl } from "@chakra-ui/react";
// components
import ProfileImage from "../ProfileImage";
import TextArea from "./TextArea";

const ReplyBox = ({ showReply, closeReply }) => {
  // if the reply icon is clicked show the replybox

  // input values
  const [textareaValue, setTextareaValue] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(textareaValue);
    closeReply();
  };

  if (!showReply) {
    return <></>;
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <HStack
        spacing="18px"
        as={motion.div}
        initial={{ opacity: 0, x: "-100px" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        maxW="3xl"
        shadow="2xl"
        p="4"
        rounded="md"
        mx="auto"
        my="4"
      >
        <ProfileImage />

        <TextArea
          w="full"
          value={textareaValue}
          onChange={(e) => setTextareaValue(e.target.value)}
          placeholder="Add a comment..."
        />
        <button>Send</button>
      </HStack>
    </form>
  );
};

export default ReplyBox;
