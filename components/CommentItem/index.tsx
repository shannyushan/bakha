import { Avatar, Flex, HStack, VStack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import {BsReply} from "react-icons/bs";
import {AiOutlineLike} from "react-icons/ai";

const CommentItem = ({comm}) => {
    const [isReply, setIsReply] = useState<Boolean>(false);
  return (
    <HStack alignItems="flex-start">
      <Avatar />
      <VStack alignItems="flex-start">
        <Text size="md" fontWeight="bold">
          {" "}
          Alan Walker
        </Text>
        <Text>
          Donec rutrum congue leo eget malesuada. Donec sollicitudin molestie
          malesuada. Vivamus magna justo, lacinia eget consectetur sed,
          convallis at tellus. Nulla porttitor accumsan tincidunt.
        </Text>
        <HStack alignItems="center">
            <Flex alignItems="center">
            <BsReply/>
            <Text>Reply</Text>
            </Flex>
            <Flex alignItems="center">
            <AiOutlineLike/>
            <Text>Like</Text>
            </Flex>
        </HStack>
      </VStack>
    </HStack>
  );
};

export default CommentItem;
