import React, { useContext, useState } from "react";
import {
  UnorderedList,
  ListItem,
  Select,
  Flex,
  Box,
  Button,
  GridItem,
  Grid,
  useToken,
} from "@chakra-ui/react";
import getBooks from "../utils/getBookData";

import BookType from "../types/BookType";
import { ViewerContext } from "../store/ViewerContext";
import getChapterNames from "../utils/getChapterNames";
import { useNavigate } from "react-router-dom";

function Toc({ externalAction, columns, showCount }: any) {
  const viewerContext = useContext(ViewerContext);
  const [tocBook, setTocBook] = useState<string>(viewerContext.bookId);
  const navigate = useNavigate();

  const books = getBooks();
  const chapters = getChapterNames({ storyId: tocBook });
  const [brandMain] = useToken("colors", ["brand.main"]);

  const [pagination, setPagination] = useState<any>({
    perPage: 6,
    currentPage: 1,
    pageCount: chapters && Math.ceil(chapters.length / 6),
  });

  const handleSelectChange = (val: any) => {
    setPagination({
      perPage: 6,
      currentPage: 1,
      pageCount: chapters && Math.ceil(chapters.length / 6),
    });
    setTocBook(val.target.value);
  };
  const handleChapterClick = (index: number) => {
    let usableIndex = pagination.perPage * (pagination.currentPage - 1) + index;
    console.log(
      usableIndex,
      pagination.perPage * pagination.currentPage + index
    );

    viewerContext.updateBookId(tocBook);
    viewerContext.updateStoryIndex(usableIndex);

    if (externalAction) {
      externalAction();
    }
    window.scrollTo(0, 0);
    navigate("/viewer");
  };

  return (
    <Box width="100%">
      <Select onChange={handleSelectChange} borderRadius={12} mb={4}>
        {books.map((item: BookType) => {
          return (
            <option key={item.id} value={item.id}>
              {item.title}
            </option>
          );
        })}
      </Select>

      <Grid
        templateColumns={`repeat(${columns ? columns : 2}, ${
          columns ? 100 / columns + "%" : "50%"
        })`}
        gap={4}
        mb={4}
      >
        {chapters &&
          chapters
            .slice(
              (pagination.currentPage - 1) * pagination.perPage,
              pagination.currentPage * pagination.perPage
            )
            .map((item: any, index: number) => {
              return (
                <GridItem
                  key={index + 1}
                  onClick={() => {
                    handleChapterClick(index);
                  }}
                  margin="0"
                  padding="0"
                  overflowWrap={"break-word"}
                >
                  <Box
                    paddingY={4}
                    paddingX={8}
                    borderRadius={30}
                    // textAlign={"center"}
                    boxShadow={`inset 0 0 0 4px ${brandMain}`}
                    _hover={{
                      cursor: "pointer",
                      background: "brand.main",
                      color: "white",
                    }}
                    display="flex"
                  >
                    <Box>{item}</Box> <small>Chapter {index + 1}</small>
                  </Box>
                </GridItem>
              );
            })}
      </Grid>

      <Flex alignItems={"center"}>
        <Box flex="1">
          {pagination.currentPage > 1 && (
            <Button
              variant={"branded"}
              onClick={() => {
                if (pagination.currentPage > 1) {
                  setPagination({
                    ...pagination,
                    currentPage: pagination.currentPage - 1,
                  });
                }
              }}
              whiteSpace={"wrap"}
            >
              Prev
            </Button>
          )}
        </Box>

        {showCount !== false && (
          <Box fontSize={20}>
            <Box display={"inline"} color={brandMain}>
              {pagination.currentPage}
            </Box>{" "}
            / {pagination.pageCount}
          </Box>
        )}
        <Box flex={1} textAlign={"right"}>
          {" "}
          {pagination.currentPage < pagination.pageCount && (
            <Button
              variant={"branded"}
              onClick={() => {
                if (pagination.currentPage < pagination.pageCount) {
                  setPagination({
                    ...pagination,
                    currentPage: pagination.currentPage + 1,
                  });
                }
              }}
            >
              Next
            </Button>
          )}
        </Box>
      </Flex>
    </Box>
  );
}

export default Toc;
