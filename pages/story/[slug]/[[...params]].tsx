import React, { useEffect } from "react";
import { useRouter } from "next/router";
import next, { NextPage } from "next";
import useStory, { StoryProvider } from "../../../context/storyContext";
import {
  Container,
  Box,
  VStack,
  Flex,
  Heading,
  Text,
  Grid,
  GridItem,
  useMediaQuery,
} from "@chakra-ui/react";
import Image from "next/image";
import data from "./data";

const StoryPage: NextPage = () => {
  const router = useRouter();
  const { params, slug } = router.query;
  console.log(params, slug);
  const [islargerThan110] = useMediaQuery("(min-width: 1100px)");
  const [islargerThan900] = useMediaQuery("(min-width: 900px)");

  const {
    storyid,
    chapterid,
    nextChapter,
    prevChapter,
    firstChapter,
    lastChapter,
  } = useStory();

  useEffect(() => {
    //get the id of story and chapter to load
  }, [params, slug]);

  const boxStyle = {
    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "column",
    border: "1px solid rgba(110,110,110,0.5)",
    marginEnd: "1em",
    padding: "1em",
    borderRadius: "5px",
    // boxShadow:'0px 4px 11px rgba(0,0,0,0.4)'
  };
  const chapterStyleDesktop = {
    display: "flex",
    flexDirection: "column",
    marginEnd: "1em",
    padding: "1em",
    borderRadius: "5px",
    border: "none!important",
    minWidth: "80px",
    maxWidth: "100%",
    height: "100%",
    position: "sticky",
    top: "10px",
  };

  const chapterStyleTablet ={
    display: "flex",
    padding: "1em",
    borderRadius: '5px',
    position: 'fixed',
    bottom: '0px',
    width: '100%',
    height: '70px',
    background: 'white',
    border: '1px',
    zIndex:'10',
  }

  return (
    <StoryProvider>
      <div className="pages">
        <Container
          maxWidth={"1400px"}
          paddingTop={"2em"}
          margin="0 auto"
          marginEnd="2em"
          paddingBottom="2em"
          display={"flex"}
        >
          <Flex as="aside" sx={islargerThan110?chapterStyleDesktop:chapterStyleTablet}>
            {data.chapter.map((d) => (
              <h1 key={d}>{d}</h1>
            ))}
          </Flex>
          <Grid
            width="100%"
            height="100%"
            padding="0"
            gridGap={"0.5em"}
            gridTemplateColumns={islargerThan900?"7fr 3fr":"1fr"}
          >
            <GridItem as="main" sx={boxStyle} >
              <Image src={"/bakha.png"} width="100%" height={"500px"} />
              <Heading>Lorem Ipsum Dolor</Heading>
              <Text
                textAlign={"justify"}
                fontSize="1.25rem"
                fontFamily={"var(--ff-content)"}
              >
                {data.text}
              </Text>
            </GridItem>
            <GridItem
              as="aside"
              maxHeight={"700px"}
              position="sticky"
              top="10px"
              sx={boxStyle}
              margin="0!important"
             
            >
              <Flex>
                {/* share like watch list */}

                {/* <author></author> */}
              </Flex>
              <Flex>
                {/* <Similar posts> */}
                {/* and more */}
              </Flex>
            </GridItem>
          </Grid>
        </Container>
      </div>
    </StoryProvider>
  );
};

export default StoryPage;
