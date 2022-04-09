import React from "react";
import { useRouter } from "next/router";
import { NextPage } from "next";
import NextLink from "next/link";

import StoryItem from "./../../components/Story";
import {
  Container,
  Flex,
  Box,
  Grid,
  GridItem,
  Image,
  Heading,
  Text,
  HStack,
  Link,
  VStack,
} from "@chakra-ui/react";

import data from "./[slug]/data";

const Story: NextPage = () => {


  const asidenavStyle ={
    position:'sticky',
    top:'2em'
  }


  return (
    <Flex
      maxWidth={"1500px"}
      className="pages"
      paddingTop={"2em"}
      margin="0 auto"
      paddingBottom="2em"
      flexDirection={"column"}
      height="100%"
    >
      <Grid
        minHeight={"450px"}
        margin="1.5em"
        gap={"0.8em"}
        className="storyHeader"
      >
        <VStack
          p="0.5em"
          className="trendingStories"
          border={"var(--borderNormal)"}
          justifyContent={"flex-start"}
          alignItems="flex-start"
        >
          <Text pt="0.8em" size="xl" fontStyle={"bold"}>
            Trending Stories
          </Text>
          <hr />
          <VStack gap={"1px"} w="100%">
            {[1, 2, 3, 4, 5].map((trendingitem) => (
              <HStack
                key={trendingitem}
                p="0.4em"
                backgroundColor={"white"}
                w="100%"
              >
                <Image
                  src=""
                  width={"5em"}
                  height={"3em"}
                  alt="ds"
                  objectFit={"cover"}
                />
                <VStack>
                  <Text size="md" fontWeight={"semibold"}>
                    Lorem Ipsum Dolor
                  </Text>
                  <Text> 2014.3.02</Text>
                </VStack>
              </HStack>
            ))}
          </VStack>
        </VStack>
        <Box className="topStory">
          <Image
            src="https://cdn.pixabay.com/photo/2017/10/17/19/11/fantasy-2861815_960_720.jpg"
            alt="top story: hello"
            objectFit={"cover"}
            width="100%"
            height={"100%"}
          />
        </Box>
        <VStack
          p="0.5em"
          className="popularStories"
          border={"var(--borderNormal)"}
          justifyContent={"flex-start"}
          alignItems="flex-start"
        >
          <Text pt="0.8em" size="xl" fontStyle={"bold"}>
            Popular Stories
          </Text>
          <hr />
          <VStack gap={"1px"} w="100%">
            {[1, 2, 3, 4, 5].map((popularitem) => (
              <HStack
                key={popularitem}
                p="0.4em"
                backgroundColor={"white"}
                w="100%"
              >
                <Image
                  src=""
                  width={"5em"}
                  height={"3em"}
                  alt="ds"
                  objectFit={"cover"}
                />
                <VStack>
                  <Text size="md" fontWeight={"semibold"}>
                    Lorem Ipsum Dolor
                  </Text>
                  <Text> 2014.3.02</Text>
                </VStack>
              </HStack>
            ))}
          </VStack>
        </VStack>
      </Grid>
      <Flex
        maxW={"1400px"}
        paddingTop={"2em"}
        margin="0 auto"
        marginEnd="2em"
        paddingBottom="2em"
        height="auto"
        w="100%"
      >
        <VStack
          as="aside"
          sx={asidenavStyle}
          w={"300px"}
          justifyContent="flex-start"
          alignItems="flex-start"
          height={"70vh"}
        >
          {/*Menus  */}
          <nav id="secondaryNav">
            <VStack as={"ul"} className="nav-menu" alignItems="flex-start">
              <NextLink href="/" passHref>
                <Link>Home</Link>
              </NextLink>
              <NextLink href="/stories" passHref>
                <Link>Explore</Link>
              </NextLink>
              <NextLink href="/" passHref>
                <Link>About</Link>
              </NextLink>
              <NextLink href="/" passHref>
                <Link>Contact</Link>
              </NextLink>
              <NextLink href="/" passHref>
                <Link>FAQ</Link>
              </NextLink>
            </VStack>
          </nav>
          <Text size="md" fontSize={"1.2em"} fontWeight={"semibold"}>Popular Tags</Text>
          <hr/>
          <VStack
            w="100%"
            className="popTags"
            overflow={"auto"}
            justifyContent={"flex-start"}
            alignItems="flex-start"
            maxHeight={400}
          >
            {data.tags.map((tag) => (
              <Text>{`#${tag.title}`}</Text>
            ))}
          </VStack>
        </VStack>
        <Grid
          width="100%"
          height="100%"
          padding="0"
          gridGap={"0.5em"}
          gridTemplateColumns={"7fr 3fr"}
        >
          <GridItem
            as="main"
            className="storyfeed"
            display={"flex"}
            flexDirection={"column"}
            gap={"2em"}
            maxWidth="720px"
            minWidth="420px"
          >
            <Box>
              <Text>Story Feed</Text>
              <hr />
            </Box>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((storyitem) => (
              <StoryItem
                key={storyitem}
                id={storyitem}
                title={"hola"}
                slug="hola"
                content="Dsadas"
                meta={"Sds"}
              />
            ))}
          </GridItem>
          <GridItem
            as="aside"
            maxHeight={"700px"}
            position="sticky"
            top="10px"
            margin="0!important"
          >
            <Flex>
              {/* {//free area for ad maybe} */}
              {/* <Wtach list posts> */}
              {/* and more */}
            </Flex>
          </GridItem>
        </Grid>
      </Flex>
    </Flex>
  );
};

export default Story;
