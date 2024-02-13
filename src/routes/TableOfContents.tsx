import React from 'react';
import BasicNav from "../components/BasicNav";
import {Heading} from "@chakra-ui/react";
import Toc from "../components/Toc";
import {ViewerContext, ViewerContextProvider} from "../store/ViewerContext";

function TableOfContents() {
    return (
        <div>
            <Heading>
                Table of Contents
            </Heading>
            <Toc/>
        </div>
    );
}

export default TableOfContents;