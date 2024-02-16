import { Container, Heading } from "@chakra-ui/react";
import Toc from "../components/Toc";

function TableOfContents() {
  return (
    <Container
      variant={"basic"}
      display="flex"
      flexDir={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      minHeight={"100vh"}
    >
      <Heading mb={4} textTransform={"uppercase"}>
        Table of Contents
      </Heading>
      <Toc />
    </Container>
  );
}

export default TableOfContents;
