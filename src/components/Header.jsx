import { Heading, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <>
      <Image src={logo} alt="logo" width={75} marginBottom="1rem" />
      <Heading color="white" marginBottom="1rem">
        AI Keyword Extractor
      </Heading>
      <Text fontSize={25} textAlign="center">
        Paste in your text below and we will extract the keywords automatically
        for you!
      </Text>
    </>
  );
};

export default Header;
