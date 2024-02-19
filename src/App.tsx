import React, { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { theme } from "./theme.js";
import Home from "./routes/Home";
import TableOfContents from "./routes/TableOfContents";
import Viewer from "./routes/Viewer";
import PageWithToc from "./components/PageWithToc";
import PageBasic from "./components/PageBasic";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PageWithToc>
        <Home />
      </PageWithToc>
    ),
  },
  {
    path: "/viewer",
    element: (
      <PageWithToc>
        <Viewer />
      </PageWithToc>
    ),
  },
  {
    path: "/toc",
    element: (
      <PageBasic>
        <TableOfContents />
      </PageBasic>
    ),
  },
]);

function App() {
  useEffect(() => {
    document.title = "Simple Reader";
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
