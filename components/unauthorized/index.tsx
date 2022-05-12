import { NextPage } from "next";
import React from "react";

import {
  Center,
  Container,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";

const UnAuthorized: NextPage = () => {
  return (
    <Container size="3xl" width={"100%"} style={{height:"calc(100% - 70px)"}}>
      <Center>
        <VStack height="100%" maxHeight="350px" margin="0 auto">
          <Heading size="xl">403 Unauthorized:</Heading>
          <Text size="xl">Web page or Resources access is unauthorized!!</Text>
          <HStack>
            <Text size="md">Encountered Problem ??</Text>
            <Link href="?"><span style={{color:"blue",textDecoration:"underline"}}>Back to Home</span></Link>
          </HStack>
        </VStack>
      </Center>
    </Container>
  );
};

export default UnAuthorized;
