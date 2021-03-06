import React, { useContext } from "react";
import { TodoContext } from "../DataProvider";

import MainHeader from "./MainHeader";
import ToggleBar from "./ToggleBar";
import Reminders from "./Reminders";
import ReminderInput from "./ReminderInput";
import { Box, Text, Flex } from "@chakra-ui/react";

const Main = ({ toggleReminder, setToggleReminder, onToggle }) => {
  const { deleteTab, tabsLength, tab } = useContext(TodoContext);

  let showDelete;
  if (tabsLength > 1 && tab !== "all") {
    showDelete = true;
  }

  return (
    <Box
      px={{ base: 3, md: 6, lg: 12 }}
      position="relative"
      className="flex flex-col flex-grow my-6"
    >
      <MainHeader setToggleReminder={setToggleReminder} />
      <Reminders />
      {toggleReminder && (
        <ReminderInput setToggleReminder={setToggleReminder} />
      )}

      <Flex align="center" py={4} position={"relative"} className="mt-auto">
        {showDelete && (
          <Box position="absolute" right={0} onClick={deleteTab}>
            <DeleteList />
          </Box>
        )}
      </Flex>

      <div className="absolute transform -translate-y-1/2 -left-2 top-1/2">
        <ToggleBar onToggle={onToggle} />
      </div>
    </Box>
  );
};

export default Main;

const DeleteList = () => {
  return (
    <Text
      as="span"
      px={3}
      color="gray.500"
      fontWeight={"semibold"}
      _hover={{ color: "gray.700", cursor: "pointer" }}
    >
      Delete list
    </Text>
  );
};
