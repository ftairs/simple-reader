import React, {useContext, useState} from 'react';
import {UnorderedList, ListItem, Select} from "@chakra-ui/react";
import getBooks from "../utils/getBookData";

import BookType from "../types/BookType"
import {ViewerContext} from "../store/ViewerContext";
import getChapterNames from "../utils/getChapterNames";
import {useNavigate} from "react-router-dom";

function Toc() {
    const viewerContext = useContext(ViewerContext);
    const [tocBook, setTocBook] = useState<string>(viewerContext.bookId);
    const navigate = useNavigate();

    const books = getBooks();
    const chapters = getChapterNames({storyId: tocBook})

    const handleSelectChange = (val: any) => {
        setTocBook(val.target.value)
    };
    const handleChapterClick = (index: number) => {
        viewerContext.updateBookId(tocBook);
        viewerContext.updateStoryIndex(index);
        navigate('/viewer');
    }

    return (

        <div>
            {/*Current viewing Book ID: {viewerContext.bookId} - Selected Story: {viewerContext.storyIndex} - toc*/}
            {/*book: {tocBook} -*/}
            <Select onChange={handleSelectChange}>
                {books.map((item: BookType) => {
                    return <option value={item.id}>{item.title}</option>
                })}
            </Select>
            <UnorderedList>
                {chapters && chapters.map((item: any, index: number) => {
                    return <ListItem
                        onClick={() => {
                            handleChapterClick(index);
                        }}>{item}</ListItem>
                })}
            </UnorderedList>
        </div>


    );
}

export default Toc;