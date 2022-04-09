import { Box, Flex, HStack } from "@chakra-ui/layout";
import next from "next";
import { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import logosrc from "./../../public/Bakha.png";
import {
  Container,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Link,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import styles from "./Navigation.module.css";
import useAuth from "../../context/userContext";

const Navigation = () => {
  const [islogin, setIslogin] = useState<boolean>(false);
  const { islogged } = useAuth();

  const loginpopup = (e) => {
    e.preventDefault();
    setIslogin(!islogin);
  };

  return (
    <nav className={styles.nav}>
      <HStack
        maxW={1400}
        m={"0 auto"}
        alignItems={"center"}
        justifyContent="space-between"
        className={styles.Navigation}
      >
        <HStack gap="2em">
          <Image src={logosrc} alt="Bakha Logo" width="40px" height="60px" />
          <InputGroup size="md" maxWidth={500} width="45vw">
            <Input pr="4.5rem" type="text" placeholder="Search for story" />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={() => {}}>
                <BsSearch />
              </Button>
            </InputRightElement>
          </InputGroup>
        </HStack>

        <HStack>
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
      </HStack>
      {!islogged && islogin && <Login />}
    </nav>
  );
};

const Login = () => {
  const [formstate, setFormstate] = useState({
    username: "",
    password: "",
  });

  const { user, login, logout } = useAuth();

  const handlefield = (e) => {
    setFormstate({
      ...formstate,
      [e.target.name]: e.target.value,
    });
  };

  const handlelogin = async (e) => {
    e.preventDefault();
    await login(formstate.username, formstate.password);
    console.log("reached");
  };
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
