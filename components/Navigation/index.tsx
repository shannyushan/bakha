import { Box, Flex, HStack } from "@chakra-ui/layout";
import { Button, Link } from "@chakra-ui/react";
import next from "next";
import Image from "next/image";
import NextLink from "next/link";
import logosrc from "./../../public/Bakha.png";

import styles from "./Navigation.module.css";

const Navigation = ({ isauthed, activePage }) => {
  return (
    <nav className={styles.nav}>
      <HStack alignItems={"center"} className={styles.Navigation}>
        <Box marginLeft={"2em"}>
          <Image src={logosrc} alt="Bakha Logo" width="40px" height="60px" />
        </Box>
        <HStack as={"ul"} className="nav-menu" alignItems="center">
          
          <NextLink href="/" passHref>
            <Link>Home</Link>
          </NextLink>
          <NextLink href="/stories" passHref>
            <Link>Explore</Link>
          </NextLink>
          {isauthed ? (
            <>
              <NextLink href="/" passHref>
                <Link>My Stories</Link>
              </NextLink>
              <NextLink href="/" passHref>
                <Link>Profile</Link>
              </NextLink>
            </>
          ) : (
            <>
              <NextLink href="/" passHref>
                <Link>About</Link>
              </NextLink>
              <NextLink href="/" passHref>
                <Link>Contact</Link>
              </NextLink>
            </>
          )}
        </HStack>
        <HStack alignItems={"center"}>
          {isauthed ? (
            <Button>Logout</Button>
          ) : (
            <>
              <Button>Register</Button>
              <Button>Login</Button>
            </>
          )}
        </HStack>
      </HStack>
    </nav>
  );
};

export default Navigation;
