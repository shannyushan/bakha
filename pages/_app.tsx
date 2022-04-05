import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import Navigation from "../components/Navigation";
import { AuthProvider } from "../context/userContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ChakraProvider theme={theme}>
        <Navigation />
        <Component {...pageProps} />
      </ChakraProvider>
    </AuthProvider>
  );
}

export default MyApp;
