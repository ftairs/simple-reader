import {createContext, useContext, useState} from "react";

export const ViewerContext = createContext({
    bookId: '2149',
    storyIndex: 0,
    zoomLevel: 1,
    scrollSpeed: 1,
    updateBookId: (id: any) => {
    },
    updateStoryIndex: (index: any) => {
    },
    increaseZoomLevel: () => {
    },
    decreaseZoomLevel: () => {
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
        },
        increaseZoomLevel: () => {
            if (zoomLevel < 2) {
                let newZoomLevel = zoomLevel + 0.2;
                setZoomLevel(parseFloat(newZoomLevel.toFixed(3)))
            }
        },
        decreaseZoomLevel: () => {
            if (zoomLevel > 0.2) {
                let newZoomLevel = zoomLevel - 0.2;
                setZoomLevel(parseFloat(newZoomLevel.toFixed(3)))
            }
        }
    };
    return <ViewerContext.Provider value={viewerCtx}>
        {children}
    </ViewerContext.Provider>
}