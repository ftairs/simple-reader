import { Box, Button, Container, Heading, Link, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { TiArrowRight } from "react-icons/ti";
import { useState } from "react";
import homeBG from "../assets/image/home-bg.jpg";
import optVideo from "../assets/video/opt-video.mp4";

const Home = () => {
  const navigate = useNavigate();
  const handleOpenToc = () => {
    navigate("/toc");
  };
  const [textHovered, setTextHovered] = useState(false);
  return (
    <Box>
      <Box
        position={"fixed"}
        top="0"
        left="0"
        width="100%"
        height="100%"
        zIndex={0}
        backgroundImage={homeBG}
        backgroundSize="cover"
        backgroundRepeat={"no-repeat"}
        backgroundPosition={"center center"}
        opacity={0.25}
      ></Box>
      <Box
        minHeight={"50vh"}
        fontSize={100}
        wordBreak={"break-all"}
        overflow={"hidden"}
        aria-hidden
        opacity={0.5}
        onMouseOver={() => {
          setTextHovered(true);
        }}
        onMouseOut={() => {
          setTextHovered(false);
        }}
        position={"relative"}
        fontWeight={"bold"}
      >
        <Box
          width={"100%"}
          height="100%"
          position="absolute"
          top={0}
          left={0}
          bgGradient="linear(to-b, black, transparent)"
          zIndex={2}
        ></Box>
        <Box
          whiteSpace={"nowrap"}
          position="relative"
          left={textHovered ? 15 : 10}
          transition={"0.5s ease all"}
          maxWidth={"80vw"}
          display="flex"
          alignItems={"center"}
          justifyContent={"center"}
        >
          E.A.Poe-E.A.Poe-E.A.Poe-E.A.Poe-E.A.Poe
        </Box>
        <Box
          whiteSpace={"nowrap"}
          position="relative"
          left={textHovered ? -15 : -10}
          transition={"0.5s ease all"}
          maxWidth={"80vw"}
          display="flex"
          alignItems={"center"}
          justifyContent={"center"}
        >
          E.A.Poe-E.A.Poe-E.A.Poe-E.A.Poe-E.A.Poe
        </Box>
        <Box
          whiteSpace={"nowrap"}
          position="relative"
          left={textHovered ? -5 : 0}
          transition={"0.5s ease all"}
          maxWidth={"80vw"}
          display="flex"
          alignItems={"center"}
          justifyContent={"center"}
        >
          E.A.Poe-E.A.Poe-E.A.Poe-E.A.Poe-E.A.Poe
        </Box>
      </Box>
      <Container variant={"basic"} pb={10} position={"relative"} zIndex={2}>
        <Heading fontSize={42} mb={4}>
          Simple Reader
          <Box fontSize={24} color={"brand.main"}>
            E.A. Poe Edition
          </Box>
        </Heading>
        <Text mb={4}>
          Simple Reader is a for-fun project created to experiement in scraping,
          compiling and using data. The data comes from Project Gutenberg,
          scraped and compiled in NodeJS and then presented in this Reactjs app.
        </Text>
        <Button variant={"branded"} onClick={handleOpenToc}>
          Start Reading Now
          <Box display="inline" marginLeft={12}>
            <TiArrowRight size={42} />
          </Box>
        </Button>
      </Container>
    </Box>
  );
};

export default Home;
