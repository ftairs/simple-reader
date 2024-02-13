import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import rawData from "../data/story_data.json";
import { ViewerContext } from "../store/ViewerContext";
import { useContext } from "react";

function RelatedContent() {
  const viewerCtx = useContext(ViewerContext);

  const bookData = rawData.find(
    (item) => item.id === parseInt(viewerCtx.bookId)
  );
  const chapterLength = bookData && bookData.chapters.length;
  const navigatePrev = () => {
    viewerCtx.updateStoryIndex(
      viewerCtx.storyIndex > 0 ? viewerCtx.storyIndex - 1 : viewerCtx.storyIndex
    );
  };
  const navigateNext = () => {
    if (chapterLength) {
      viewerCtx.updateStoryIndex(
        viewerCtx.storyIndex < chapterLength - 1
          ? viewerCtx.storyIndex + 1
          : viewerCtx.storyIndex
      );
    }
  };
  return (
    <Flex width={"100%"} background={"blue"} paddingY={10}>
      {viewerCtx.storyIndex > 0 && (
        <Box flex={1} onClick={navigatePrev}>
          Prev - {bookData?.chapterNames[viewerCtx.storyIndex - 1]}
        </Box>
      )}
      {chapterLength && viewerCtx.storyIndex < chapterLength - 1 && (
        <Box flex={1} onClick={navigateNext}>
          Next - {bookData?.chapterNames[viewerCtx.storyIndex + 1]}
        </Box>
      )}
    </Flex>
  );
}

export default RelatedContent;
