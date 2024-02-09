import {createContext, useContext, useState} from "react";

export const ViewerContext = createContext({
    bookId: '2149',
    storyIndex: 0,
    zoomLevel: 1,
    scrollSpeed: 1,
    updateBookId: (id: any) => {
    },
    updateStoryIndex: (index: any) => {

    }
});

// @ts-ignore
export const ViewerContextProvider = ({children}) => {
    const [bookId, setBookId] = useState('2149');
    const [storyIndex, setStoryIndex] = useState(0);
    const [zoomLevel, setZoomLevel] = useState(1);
    const [scrollSpeed, setScrollSpeed] = useState(1);

    let viewerCtx = {
        bookId: bookId,
        storyIndex: storyIndex,
        zoomLevel: zoomLevel,
        scrollSpeed: scrollSpeed,
        updateBookId: (id: any) => {
            setBookId(id.toString())
        },
        updateStoryIndex: (index: any) => {
            setStoryIndex((index))
        }
    };
    return <ViewerContext.Provider value={viewerCtx}>
        {children}
    </ViewerContext.Provider>
}