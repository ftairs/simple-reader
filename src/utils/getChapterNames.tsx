import rawData from "../data/story_data.json";

const getChapterNames = ({ storyId }: { storyId: string }) => {
  const bookData = rawData.find((obj) => obj.id.toString() === storyId);
  if (bookData) {
    return bookData.chapterNames;
  } else {
    console.log("data not found :(");
    return null;
  }
};

export default getChapterNames;
