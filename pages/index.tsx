import { Container, Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="page">
      <Head>
        <title>Bakha: </title>
      </Head>

      <Container size={"xl"}>
        <Flex
          width={"100%"}
          bg="teal.400"
          height={[
            "100%", // 0-30em
            "80%", // 30em-48em
            "55%", // 48em-62em
            "45%", // 62em+
          ]}
          background={"red"}
        ></Flex>
      </Container>
    </div>
  );
};

export default Home;
