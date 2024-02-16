import rawData from "../data/story_data.json";

const getStory = (bookId: any, storyIndex: any) => {
  let storyReturn: any = {};
  let bookData = rawData.find((obj) => obj.id.toString() === bookId);
  if (bookData) {
    storyReturn.title = bookData.chapterNames[storyIndex];
    storyReturn.markup = bookData.chapters[storyIndex];
  }
  return storyReturn;
};

export default getStory;
