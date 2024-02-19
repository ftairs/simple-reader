import { Flex, Box, Container } from "@chakra-ui/react";
import rawData from "../data/story_data.json";
import { TiArrowLeft, TiArrowRight } from "react-icons/ti";
import useViewerStore from "../store/ViewerStore";

function RelatedContent() {
  const viewerStore = useViewerStore((state: any) => state);

  const bookData = rawData.find(
    (item) => item.id === parseInt(viewerStore.bookId)
  );
  const chapterLength = bookData && bookData.chapters.length;
  const navigatePrev = () => {
    window.scrollTo(0, 0);
    viewerStore.updateStoryIndex(
      viewerStore.storyIndex > 0
        ? viewerStore.storyIndex - 1
        : viewerStore.storyIndex
    );
  };
  const navigateNext = () => {
    window.scrollTo(0, 0);
    if (chapterLength) {
      viewerStore.updateStoryIndex(
        viewerStore.storyIndex < chapterLength - 1
          ? viewerStore.storyIndex + 1
          : viewerStore.storyIndex
      );
    }
  };
  return (
    <Container variant={"basic"} mb={20}>
      <Flex width={"100%"} paddingY={10} alignItems={"center"}>
        <Box flex="1" mr={2}>
          {viewerStore.storyIndex > 0 && (
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
              <Box flex="1" display={{ base: "none", lg: "block" }}>
                {bookData?.chapterNames[viewerStore.storyIndex - 1]}
              </Box>
            </Box>
          )}
        </Box>
        <Box
          display={{ lg: "none" }}
          width="100%"
          marginY={4}
          height={1}
          borderRadius={4}
          background={"blackAlpha.500"}
        ></Box>
        <Box flex="1" ml={2} textAlign={"right"}>
          {chapterLength && viewerStore.storyIndex < chapterLength - 1 && (
            <Box padding="0" display={"flex"} alignItems={"center"}>
              <Box flex="1" display={{ base: "none", lg: "block" }}>
                {bookData?.chapterNames[viewerStore.storyIndex + 1]}
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
