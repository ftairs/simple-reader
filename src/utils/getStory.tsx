import rawData from '../data/story_data.json'

const getStory = (bookId: any, storyIndex: any) => {
    // let storyMarkup = `test markups: ${bookId}, ${storyIndex}`

    let storyReturn: any = {};
    // const singleStoryData = storyData.find(obj => obj.id.toString() === storyId);
    let bookData = rawData.find(obj => obj.id.toString() === bookId);

    if (bookData) {
        storyReturn.title = bookData.chapterNames[storyIndex];
        storyReturn.markup = bookData.chapters[storyIndex];
    }

    return storyReturn;
}

export default getStory;

