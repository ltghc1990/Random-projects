import Image from "next/image";

import { Box, Flex, HStack } from "@chakra-ui/react";

import ProfileImage from "../ProfileImage";
import Reply from "./Reply";

// import a test image

const ProfileUi = ({ toggleReply }) => {
  // takes in a compoent that replys
  // takes in name, date posted and picture

  // if logged in show the reply
  return (
    <Flex align="center" justify="space-between">
      <HStack spacing="18px" my="4">
        <ProfileImage />

        <Box>amyrobson</Box>
        <Box as="span" color="blackAlpha.400" fontSize="xs">
          1 month ago
        </Box>
      </HStack>
      <Reply toggleReply={toggleReply} />
    </Flex>
  );
};

export default ProfileUi;
