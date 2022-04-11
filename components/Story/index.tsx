import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  BsHandThumbsUp,
  BsHandThumbsDown,
  BsFillHandThumbsUpFill,
  BsFillHandThumbsDownFill,
} from "react-icons/bs";
import React, { useState } from "react";
import CommentWraper from "../comment";

const Story = ({ id, slug, title, content, meta }) => {
  const [iscomment, setIscomment] = useState<Boolean>(false);
  const isImage =true;

  const storymetaStyle = {
    width: "3em",
    height: "3em",
    border: "1px solid rgba(20,20,20,0.6)",
  };

  return (
    <Container
      size={"xl"}
      border={"1px solid rgba(110,110,110,0.4)"}
      borderRadius="10px"
      p={"0px"}
      width="100%"
      maxWidth={"100%"}
      height={"auto"}
    >
      <VStack height={"100%"}>
        {isImage && (
          <HStack
            width={"100%"}
            justifyContent="stretch"
            maxH={"350px"}
            height={"50vw"}
          >
            <Image width={"100%"} height="auto" objectFit={"cover"} />
          </HStack>
        )}
        <Box className="storyinfo" p="1.2em">
          <HStack
            marginTop={"0.5em"}
            justifyContent="flex-start"
            alignItems="flex-start"
            gap="1em"
          >
            <Avatar src="" />
            <VStack alignItems={"flex-start"}>
              <Text size="sm">SR.Ramananda</Text>
              <Text fontSize={"10px"}>2012/13/2</Text>
            </VStack>
          </HStack>
          <Heading margin={"0.2em 0"} size={"xl"}>
            This is the Title of the story
          </Heading>

          <Text size="md">
            Quisque velit nisi, pretium ut lacinia in, elementum id enim.
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            Nulla quis lorem ut libero malesuada feugiat. Vivamus suscipit
            tortor eget felis porttitor volutpat......
          </Text>
          <hr style={{ margin: "0.6em 0" }} />
          <HStack justifyContent={"space-between"} alignItems="end">
            <HStack justifyContent={"flex-start"} alignItems="end">
              <Flex
                sx={storymetaStyle}
                justifyContent="center"
                alignItems="center"
              >
                <BsHandThumbsUp size={"1.5em"} />
              </Flex>
              <Flex
                sx={storymetaStyle}
                justifyContent="center"
                alignItems="center"
              >
                <BsHandThumbsDown size={"1.5em"} />
              </Flex>
              <Button variant="ghost" onClick={(e)=>{
               e.preventDefault();
               setIscomment(true); 
              }}>Comment</Button>
              <Button variant="ghost">Read Later</Button>
            </HStack>

            <Button colorScheme={"teal"} variant="solid">
              Read
            </Button>
          </HStack>
          <hr style={{ margin: "0.6em 0" }} />
        </Box>
        {iscomment && <CommentWraper size="md"/>}
      </VStack>
    </Container>
  );
};



export default Story;
