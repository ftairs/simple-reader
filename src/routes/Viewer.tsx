import React from 'react';
import BasicNav from "../components/BasicNav";
import {ViewerContextProvider, ViewerContext} from "../store/ViewerContext";
import {Box, Heading} from "@chakra-ui/react";
import RelatedContent from "../components/RelatedContent";
import getStory from "../utils/getStory";

function Viewer() {
    const viewerContext = React.useContext(ViewerContext);
    // const storyData = getStoryData({storyId: viewer.bookId});

    let storyData = getStory(viewerContext.bookId, viewerContext.storyIndex)

    window.history.pushState("", "", `/viewer/${storyData.title.replace(/ /g, "_")}`);


    return (
        <>
            <BasicNav/>
            <Heading>
                {storyData && storyData.title}
            </Heading>
            <small>{viewerContext.bookId}</small>
            {storyData && <Box>
                <div dangerouslySetInnerHTML={{__html: storyData.markup}}></div>
            </Box>}
            <RelatedContent storyId={viewerContext.bookId}/></>
    );
}

export default Viewer;