import React, { useContext, useState } from "react";
import { UnorderedList, ListItem, Select, Flex, Box } from "@chakra-ui/react";
import getBooks from "../utils/getBookData";

import BookType from "../types/BookType";
import { ViewerContext } from "../store/ViewerContext";
import getChapterNames from "../utils/getChapterNames";
import { useNavigate } from "react-router-dom";

function Toc({ externalAction }: any) {
  const viewerContext = useContext(ViewerContext);
  const [tocBook, setTocBook] = useState<string>(viewerContext.bookId);
  const navigate = useNavigate();

  const books = getBooks();
  const chapters = getChapterNames({ storyId: tocBook });

  const [pagination, setPagination] = useState<any>({
    perPage: 5,
    currentPage: 1,
    pageCount: chapters && Math.ceil(chapters.length / 5),
  });

  const handleSelectChange = (val: any) => {
    setPagination({
      perPage: 5,
      currentPage: 1,
      pageCount: chapters && Math.ceil(chapters.length / 5),
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
    <div>
      <Select onChange={handleSelectChange}>
        {books.map((item: BookType) => {
          return (
            <option key={item.id} value={item.id}>
              {item.title}
            </option>
          );
        })}
      </Select>
      <UnorderedList>
        {chapters &&
          chapters
            .slice(
              (pagination.currentPage - 1) * pagination.perPage,
              pagination.currentPage * pagination.perPage
            )
            .map((item: any, index: number) => {
              return (
                <ListItem
                  key={index + 1}
                  onClick={() => {
                    handleChapterClick(index);
                  }}
                >
                  {item}
                </ListItem>
              );
            })}
      </UnorderedList>
      <Flex>
        {pagination.currentPage > 1 && (
          <Box
            flex={1}
            onClick={() => {
              if (pagination.currentPage > 1) {
                setPagination({
                  ...pagination,
                  currentPage: pagination.currentPage - 1,
                });
              }
            }}
          >
            Prev
          </Box>
        )}
        <Box>
          {pagination.currentPage} / {pagination.pageCount}
        </Box>
        {pagination.currentPage < pagination.pageCount && (
          <Box
            flex={1}
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
          </Box>
        )}
      </Flex>
    </div>
  );
}

export default Toc;
