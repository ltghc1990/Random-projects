import React, { useState } from "react";
import Card from "../components/interactiveComments/card";

import { useDisclosure } from "@chakra-ui/react";

import ReplyBox from "../components/interactiveComments/replyBox";

const InteractiveComments = () => {
  const { isOpen, onToggle, onClose, onOpen } = useDisclosure({
    defaultIsOpen: false,
  });

  return (
    <div className="">
      <Card toggleReply={onToggle} />

      <ReplyBox showReply={isOpen} closeReply={onClose} />
    </div>
  );
};

export default InteractiveComments;
