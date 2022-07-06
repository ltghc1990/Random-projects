import React, { useState } from "react";
import Card from "../components/interactiveComments/card";

import { useDisclosure, Text } from "@chakra-ui/react";

import ReplyBox from "../components/interactiveComments/replyBox";

import { useQuery } from "react-query";

// firebase stuff
import { query, where } from "firebase/firestore";
import { getCollection } from "../components/interactiveComments/DataManagement";

const InteractiveComments = () => {
  const { isOpen, onToggle, onClose, onOpen } = useDisclosure({
    defaultIsOpen: false,
  });

  console.log(collectionRef);
  // pull all post and comments of anything related to todoapp
  //   will need the comments and post collectionref

  const postRef = getCollection("posts");
  const commentsRef = getCollection("comments");

  return (
    <div className="">
      <Text>Todo App</Text>
      <Text>Comments: </Text>
      <Card toggleReply={onToggle} />

      <ReplyBox showReply={isOpen} closeReply={onClose} />
    </div>
  );
};

export default InteractiveComments;
