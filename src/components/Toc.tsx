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

  const handleSelectChange = (val: any) => {
    setTocBook(val.target.value);
  };
  const handleChapterClick = (index: number) => {
    viewerContext.updateBookId(tocBook);
    viewerContext.updateStoryIndex(index);
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
          chapters.map((item: any, index: number) => {
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
        <Box flex={1}>Prev</Box>
        <Box flex={1}>Next</Box>
      </Flex>
    </div>
  );
}

export default Toc;
