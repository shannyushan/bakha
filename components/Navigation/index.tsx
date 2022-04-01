import { Box, Flex, HStack } from "@chakra-ui/layout";
import next from "next";
import Image from "next/image";
import Link from "next/link";
import logosrc from "./../../public/Bakha.png";

import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <HStack alignItems={"center"} className={styles.Navigation}>
        <Box>
          <Image src={logosrc} alt="Bakha Logo" width="40px" height="60px" />
        </Box>
        <HStack as={"ul"} className="nav-menu" alignItems="center">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Explore</Link>
          <Link href={"/"}>Bakha</Link>
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Contact</Link>
        </HStack>
      </HStack>
    </nav>
  );
};

export default Navigation;
