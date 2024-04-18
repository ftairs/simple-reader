import React, { useState } from "react";
import {
  Select,
  Flex,
  Box,
  Button,
  GridItem,
  Grid,
  useToken,
  useColorModeValue,
} from "@chakra-ui/react";
import getBooks from "../utils/getBookData";
import BookType from "../types/BookType";
import getChapterNames from "../utils/getChapterNames";
import { useNavigate } from "react-router-dom";
import useViewerStore from "../store/ViewerStore";

// TODO: v1.5 rework mobile breakdown

function Toc({ externalAction, showCount, compact }: any) {
  const viewState = useViewerStore((state: any) => state);
  const [tocBook, setTocBook] = useState<string>(viewState.bookId);
  const navigate = useNavigate();
  const [hoverIndex, setHoverIndex] = useState<number | undefined>(undefined);

  const books = getBooks();
  const chapters = getChapterNames({ storyId: tocBook });
  const [brandMain] = useToken("colors", ["brand.main"]);
  const hoverTextColor = useColorModeValue("black", "white");
  const hoverBgColor = useColorModeValue("gray.100", "blackAlpha.500");

  const [pagination, setPagination] = useState<{
    perPage: number;
    currentPage: number;
    pageCount: any;
  }>({
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
    viewState.updateBookId(tocBook);
    viewState.updateStoryIndex(usableIndex);
    if (externalAction) {
      externalAction();
    }
    window.scrollTo(0, 0);
    navigate("/viewer");
  };

  const getChapterIndex = (index: any) => {
    const prevCount = (pagination.currentPage - 1) * pagination.perPage;
    return index + 1 + prevCount;
  };

  return (
    <Box width="100%" mb={8}>
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
        templateColumns={{
          base: `repeat(1, 100%)`,
          lg: `repeat(${compact ? 1 : 2}, ${compact ? "100%" : "50%"})`,
        }}
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
                  onClick={() => handleChapterClick(index)}
                  margin="0"
                  padding="0"
                  overflowWrap={"break-word"}
                  paddingY={!compact ? 6 : 2}
                  paddingX={!compact ? 8 : 4}
                  borderRadius={10}
                  color={hoverTextColor}
                  _hover={{
                    cursor: "pointer",
                    background: "gray.100",
                    bg: hoverBgColor,
                  }}
                  display={compact ? "flex" : "block"}
                  alignItems={compact ? "center" : undefined}
                  onMouseOver={() => {
                    setHoverIndex(index);
                  }}
                  onMouseOut={() => {
                    setHoverIndex(undefined);
                  }}
                >
                  <Box
                    fontSize="small"
                    fontWeight={"bold"}
                    mr={compact ? 2 : 0}
                    color={hoverIndex === index ? "brand.main" : undefined}
                  >
                    {!compact
                      ? `Chapter ${getChapterIndex(index)}`
                      : `Ch.${getChapterIndex(index)}`}
                  </Box>
                  <Box
                    fontFamily={"heading"}
                    fontSize="large"
                    textTransform={"capitalize"}
                  >
                    {item}
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
          <Box fontSize={20} fontStyle="italic">
            <Box display={"inline"} color={brandMain}>
              {pagination.currentPage}
            </Box>
            / {pagination.pageCount}
          </Box>
        )}

        <Box flex={1} textAlign={"right"}>
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
