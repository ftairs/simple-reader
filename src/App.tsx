import React from 'react';
import {ChakraProvider, useDisclosure} from '@chakra-ui/react';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import {theme} from "./theme.js";

import Home from './routes/Home';
import TableOfContents from "./routes/TableOfContents";
import Viewer from "./routes/Viewer";
import {ViewerContextProvider} from "./store/ViewerContext";
import TocDrawer from "./components/TocDrawer";
import PageWithToc from "./components/PageWithToc";
import PageBasic from "./components/PageBasic";


const router = createBrowserRouter([
    {
        path: "/",
        element: <PageWithToc><Home/></PageWithToc>,
    },
    {
        path: "/viewer",
        element: <PageWithToc><Viewer/></PageWithToc>,
    },
    {
        path: "/toc",
        element: <PageBasic><TableOfContents/></PageBasic>,
    },
]);

function App() {

    return (
        <ChakraProvider theme={theme}>
            <ViewerContextProvider>
                <RouterProvider router={router}/>
            </ViewerContextProvider>
        </ChakraProvider>

    );
}

export default App;
