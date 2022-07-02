import React, { useState } from "react";
import { motion } from "framer-motion";
import { Flex, Button } from "@chakra-ui/react";
// components
import ProfileImage from "../ProfileImage";
import TextArea from "./TextArea";

const ReplyBox = () => {
  // if the reply icon is clicked show the replybox

  // input values
  const [textareaValue, setTextareaValue] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(textareaValue);
  };

  return (
    <Flex maxW="3xl" shadow="2xl" p="4" rounded="md" mx="auto" my="4">
      <ProfileImage />

      <form className="flex w-full outline" onSubmit={onSubmitHandler}>
        <TextArea
          w="full"
          value={textareaValue}
          onChange={(e) => setTextareaValue(e.target.value)}
          placeholder="Add a comment..."
        />

        <Button>Send</Button>
      </form>
    </Flex>
  );
};

export default ReplyBox;
