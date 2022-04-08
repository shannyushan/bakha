import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Story = ({ id, slug, title, content, meta }) => {
    const [iscomment, setIscomment] = useState<Boolean>(false);

  return (
    <Container size={"xl"} border={"1px solid rgba(110,110,110,0.4)"} p={"0px"} width="100%" maxWidth={"100%"}  height={"100%"}>
      <VStack height={"100%"}>
        <HStack width={"100%"} justifyContent="stretch">
          <Flex width={"20%"} maxW="90px" height={"400px"} borderTopRightRadius="15px" border={"1px solid rgba(110,110,110,0.4)"} ></Flex>
          <Image width={"100%"} />
          <Flex width={"20%"} maxW="90px" height={"400px"} borderTopLeftRadius="15px" border={"1px solid rgba(110,110,110,0.4)"}></Flex>
        </HStack>
        <Box className="storyinfo" p="1.2em">
          <Heading size={"xl"}>This is the Title of the story</Heading>
          <Text size="md" marginTop={"1.2em"}>
            Quisque velit nisi, pretium ut lacinia in, elementum id enim.
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            Nulla quis lorem ut libero malesuada feugiat. Vivamus suscipit
            tortor eget felis porttitor volutpat......
          </Text>
          <HStack>
              <Box>
                
              </Box>
          </HStack>
        </Box>
      </VStack>
      {iscomment ?? <Comment id={id}/>}
    </Container>
  );
};


const Comment =({id})=>{
    return (
        <h1>HI</h1>
    )
}


export default Story;
