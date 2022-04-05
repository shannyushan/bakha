import { Box, Flex, HStack } from "@chakra-ui/layout";
import next from "next";
import { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import logosrc from "./../../public/Bakha.png";
import {
  Container,
  Input,
  Button,
  Link,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import styles from "./Navigation.module.css";
import useAuth from "../../context/userContext";

const Navigation = () => {
  const [islogin, setIslogin] = useState<boolean>(false);
  const {islogged} = useAuth();

  const loginpopup = (e) => {
    e.preventDefault();
    setIslogin(!islogin);
  };

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
          {islogged ? (
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
          {islogged ? (
            <Button>Logout</Button>
          ) : (
            <>
              <Button>Register</Button>
              <Button onClick={loginpopup}>Login</Button>
            </>
          )}
        </HStack>
      </HStack>
      {(!islogged && islogin) && <Login />}
    </nav>
  );
};

const Login = () => {
  const [formstate, setFormstate] = useState({
    username: "",
    password: "",
  });

  const {user, login, logout} = useAuth()

  const handlefield = (e) => {
    setFormstate({
      ...formstate,
      [e.target.name]: e.target.value,
    });
  };

  const handlelogin = async (e) =>{
    e.preventDefault();
    await login(formstate.username, formstate.password);
    console.log("reached");
  }
  return (
    <Container id="loginModal">
      <FormControl isRequired>
        <FormLabel htmlFor="username">Username: </FormLabel>
        <Input
          id="username"
          placeholder="Username eg: gathora223"
          name="username"
          autoComplete="username"
          onChange={handlefield}
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel htmlFor="password">Password: </FormLabel>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="**********"
          autoComplete="current-password"
          onChange={handlefield}
        />
      </FormControl>
      <Button onClick={handlelogin}>Sign In</Button>
    </Container>
  );
};

export default Navigation;
