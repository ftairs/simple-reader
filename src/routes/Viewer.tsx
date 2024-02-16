import React from "react";
import BasicNav from "../components/BasicNav";
import { ViewerContextProvider, ViewerContext } from "../store/ViewerContext";
import { Box, Container, Heading, useColorModeValue } from "@chakra-ui/react";
import RelatedContent from "../components/RelatedContent";
import getStory from "../utils/getStory";
import Controls from "../components/Controls";

function Viewer() {
  const viewerContext = React.useContext(ViewerContext);
  let storyData = getStory(viewerContext.bookId, viewerContext.storyIndex);
  // window.history.pushState("", "", `/viewer/${storyData.title.replace(/ /g, "_")}`);
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
        >
          {storyData && storyData.title}
        </Heading>

        <Container variant={"basic"} mb={8}>
          {storyData && (
            <Box
              className="js-view"
              fontSize={viewerContext.zoomLevel * 18 + "px"}
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
