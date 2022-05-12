import { NextPage } from "next";
import React from "react";

import useAuth from "../../context/userContext";
import UnAuthorized from "../../components/unauthorized";
import { Flex, HStack, VStack, Text, Heading, Input } from "@chakra-ui/react";
const StoryNew: NextPage = () => {
  const { user, islogged } = useAuth();

  if (!islogged) return <UnAuthorized />;

  return (
    <VStack
      maxW={"1440px"}
      margin="20px auto 0 auto"
      width="100%"
      alignItems="flex-start"
    >
      <Heading>Craft your Story :</Heading>
      <HStack width="100%" marginTop="2em">
        <VStack as="aside" maxWidth="320px" width="30%" alignItems="flex-start">
          <VStack w="100px">
            <label htmlFor="multichapter">Multichapter</label>
            <Input type="checkbox" id="multichapter"></Input>
          </VStack>
          <Text size="md">Chapters</Text>
        </VStack>
        <HStack flexGrow={1} justifyContent="flex-start">
          <VStack
            as="section"
            className="story form"
            alignItems="flex-start"
            flexGrow={1}
          >
            <HStack alignItems="center" w="100%">
              <Input
                type="text"
                placeholder="Story/Chapter Title"
                size="lg"
                flexGrow={1}
              ></Input>
            </HStack>
          </VStack>
          <VStack
            as="section"
            className="story_info"
            maxWidth="320px"
            width="30%"
          ></VStack>
        </HStack>
      </HStack>
    </VStack>
  );
};

export default StoryNew;
