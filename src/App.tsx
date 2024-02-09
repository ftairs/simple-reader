import React from 'react';
import {ChakraProvider} from '@chakra-ui/react';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import {theme} from "./theme.js";

import Home from './routes/Home';
import TableOfContents from "./routes/TableOfContents";
import Viewer from "./routes/Viewer";
import {ViewerContextProvider} from "./store/ViewerContext";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/viewer",
        element: <Viewer/>,
    },
    {
        path: "/toc",
        element: <TableOfContents/>,
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
