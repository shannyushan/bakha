import next from 'next'
import { Box, Grid, GridItem, HStack } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'


const Stories = () => {
  return (
    <div className="page">
      <Head>
        <title>Bakha: Explore the Stories </title>
      </Head>
      <HStack as="header" justifyContent={"center"} w='100%' maxWidth="1400px" margin={'0 auto'}>
        <Grid h='500px' w='100%' templateColumns='2.5fr 5fr 2.5fr'>
          <GridItem width='100%' className='trending'>
              hello 
          </GridItem>
          <GridItem width='100%' className='top'>
              <Box>
                {/* <Image width="100%" height='100%' /> */}
              </Box>
          </GridItem>
          <GridItem width='100%' className='top'>
              hello 
          </GridItem>
        </Grid>
      </HStack>
      </div>
  )
}

export default Stories