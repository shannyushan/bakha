import React from 'react'
import {useRouter} from 'next/router'
import { NextPage } from 'next';
import StoryItem from "./../../components/Story";
import {Container, Flex, Grid, GridItem,Image, Heading, Text, HStack, VStack} from '@chakra-ui/react'

const Story:NextPage = () => {

  return (
    <div className="pages">
        <Container
          maxWidth={"1400px"}
          paddingTop={"2em"}
          margin="0 auto"
          marginEnd="2em"
          paddingBottom="2em"
          display={"flex"}
          height="100%"
        >
          <Flex as="aside" w={"280px"}>
            
          </Flex>
          <Grid
            width="100%"
            height="100%"
            padding="0"
            gridGap={"0.5em"}
            gridTemplateColumns={"7fr 3fr"}
          >
            <GridItem as="main" display={"flex"} flexDirection={"column"} maxWidth="720px" minWidth="420px">
            <Flex className='toppost' height={"50vh"}>

            </Flex>
            <VStack className='storyfeed'>
              {
                [1,2,3,4,5,6,7,8,9,10].map(storyitem =>
                  <StoryItem id={storyitem} title={"hola"} slug="hola" content="Dsadas" meta={"Sds"}/>
                )
              }
            </VStack>
            </GridItem>
            <GridItem
              as="aside"
              maxHeight={"700px"}
              position="sticky"
              top="10px"
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
  )
}

export default Story