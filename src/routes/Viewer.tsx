import { Box, Container, Heading, useColorModeValue } from "@chakra-ui/react";
import RelatedContent from "../components/RelatedContent";
import getStory from "../utils/getStory";
import Controls from "../components/Controls";
import useViewerStore from "../store/ViewerStore";
import homeBG from "../assets/image/home-bg.jpg";

function Viewer() {
  const viewerStore = useViewerStore((state: any) => state);
  let storyData = getStory(viewerStore.bookId, viewerStore.storyIndex);
  const headerBg = useColorModeValue("gray.200", "gray.900");
  return (
    <>
      <Controls />
      <Box>
        <Heading
          marginBottom={10}
          paddingY={40}
          background={headerBg}
          textAlign={"center"}
          fontSize={60}
          position={"relative"}
          overflow={"hidden"}
        >
          <Box
            position={"absolute"}
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
          <Container variant={"basic"}>
            {storyData && storyData.title}
          </Container>
        </Heading>

        <Container variant={"basic"} mb={8}>
          {storyData && (
            <Box
              className="js-view"
              fontSize={viewerStore.zoomLevel * 18 + "px"}
              dangerouslySetInnerHTML={{ __html: storyData.markup }}
            ></Box>
          )}
        </Container>

        <RelatedContent />
      </Box>
    </>
  );
}

export default Viewer;
