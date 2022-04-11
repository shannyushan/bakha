import React, { useState, useEffect, useRef } from "react";
import {
  Flex,
  Container,
  HStack,
  Text,
  VStack,
  Image,
  Avatar,
  FormControl,
  Input,
  Button,
  Heading,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import CommentItem from "../CommentItem";

const CommentWraper = ({ size }) => {
  const [isVisible, setIsVisible] = useState<Boolean>(true);
  const observableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const IEObserver = new IntersectionObserver(
      ([e]) => setIsVisible(e.intersectionRatio < 1),
      { rootMargin: "10px", threshold: 1.0 }
    );

    // IEObserver.observe(observableRef);

    // return () => IEObserver.unobserve(observableRef);
  }, []);

  return (
    <Flex p={"1em"} w="100%" ref={observableRef}>
      <VStack w="100%" justifyContent={"flex-start"} alignItems="flex-start">
        <Heading size={size}>Leave a Reply:</Heading>
        <Text></Text>
        <HStack
          borderRadius={"10px"}
          w="100%"
          p={"1.5em 1em"}
          background={"rgba(200,200,200,0.4)"}
        >
          <Avatar />
          <FormControl>
            <Input
              border="none"
              p="1.2em"
              fontSize={"1.2em"}
              placeholder="Type Something"
            />
          </FormControl>
        </HStack>
        <hr />
        <VStack w="100%">
          <HStack justifyContent="space-between" w="100%">
            <Text fontWeight="semibold">{`Comments in the discussion 5`}</Text>
            <HStack>
              <Button variant="ghost">Newest</Button>
              <Button variant="ghost">Oldest</Button>
              <Button variant="ghost">Most Liked</Button>
            </HStack>
          </HStack>
          <hr style={{ color: "black" }} />
          <CommentItem comm={"hello"} />
        </VStack>
      </VStack>
    </Flex>
  );
};

export default CommentWraper;
