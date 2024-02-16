import React from "react";
import { Flex, Box, Container } from "@chakra-ui/react";
import rawData from "../data/story_data.json";
import { ViewerContext } from "../store/ViewerContext";
import { useContext } from "react";
import { TiArrowLeft, TiArrowRight } from "react-icons/ti";

function RelatedContent() {
  const viewerCtx = useContext(ViewerContext);

  const bookData = rawData.find(
    (item) => item.id === parseInt(viewerCtx.bookId)
  );
  const chapterLength = bookData && bookData.chapters.length;
  const navigatePrev = () => {
    window.scrollTo(0, 0);
    viewerCtx.updateStoryIndex(
      viewerCtx.storyIndex > 0 ? viewerCtx.storyIndex - 1 : viewerCtx.storyIndex
    );
  };
  const navigateNext = () => {
    window.scrollTo(0, 0);
    if (chapterLength) {
      viewerCtx.updateStoryIndex(
        viewerCtx.storyIndex < chapterLength - 1
          ? viewerCtx.storyIndex + 1
          : viewerCtx.storyIndex
      );
    }
  };
  return (
    <Container variant={"basic"} mb={20}>
      <Flex width={"100%"} paddingY={10} alignItems={"center"}>
        <Box flex="1" mr={2}>
          {viewerCtx.storyIndex > 0 && (
            <Box padding={0} display={"flex"} alignItems={"center"}>
              <Box
                onClick={navigatePrev}
                flex="0"
                paddingX={8}
                mr={4}
                background={"brand.main"}
                color="white"
                borderRadius={20}
                _hover={{ cursor: "pointer" }}
              >
                <TiArrowLeft size={40} />
              </Box>
              <Box flex="1">
                {bookData?.chapterNames[viewerCtx.storyIndex - 1]}
              </Box>
            </Box>
          )}
        </Box>
        <Box flex="1" ml={2} textAlign={"right"}>
          {chapterLength && viewerCtx.storyIndex < chapterLength - 1 && (
            <Box padding="0" display={"flex"} alignItems={"center"}>
              <Box flex="1">
                {bookData?.chapterNames[viewerCtx.storyIndex + 1]}
              </Box>
              <Box
                onClick={navigateNext}
                flex="0"
                paddingX={8}
                ml={4}
                background={"brand.main"}
                color="white"
                borderRadius={20}
                _hover={{ cursor: "pointer" }}
              >
                <TiArrowRight size={40} />
              </Box>
            </Box>
          )}
        </Box>
      </Flex>
    </Container>
  );
}

export default RelatedContent;
