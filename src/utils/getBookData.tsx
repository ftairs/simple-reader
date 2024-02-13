import rawData from '../data/story_data.json'

type BookType = {
    "id": number;
    "title": string,
    "chapterCount": number
}
const getBooks = () => {

    let bookData: BookType[] = [];

    rawData.forEach((item: any) => {
        let record: BookType = {
            "id": item.id,
            "title": item.title,
            "chapterCount": item.chapters.length
        }
        bookData.push(record);
    });

    return bookData;

    // const singleStoryData = storyData.find(obj => obj.id.toString() === storyId);
    //
    // if (singleStoryData) {
    //     console.log('data found:', singleStoryData.id);
    //     return singleStoryData;
    //
    // } else {
    //     console.log('data not found :(');
    //     return null;
    // }
};

export default getBooks;