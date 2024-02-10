import React from 'react';
import BasicNav from "../components/BasicNav";
import {ViewerContextProvider, ViewerContext} from "../store/ViewerContext";
import {Box, Heading} from "@chakra-ui/react";
import RelatedContent from "../components/RelatedContent";
import getStory from "../utils/getStory";
import Controls from "../components/Controls";

function Viewer() {
    const viewerContext = React.useContext(ViewerContext);
    let storyData = getStory(viewerContext.bookId, viewerContext.storyIndex)
    // window.history.pushState("", "", `/viewer/${storyData.title.replace(/ /g, "_")}`);

    return (
        <>
            <Controls/>
            <Box>
                <Heading marginBottom={10} padding={10} background={'red'} color="white" textAlign={"center"}>
                    {storyData && storyData.title}
                </Heading>
                {storyData && <Box>
                    <Box maxWidth={"800px"} margin={"0 auto"}
                         fontSize={(viewerContext.zoomLevel * 18) + 'px'}
                         dangerouslySetInnerHTML={{__html: storyData.markup}}></Box>
                </Box>}

                <RelatedContent/>
            </Box>
        </>
    );
}

export default Viewer;