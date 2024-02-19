# Simple Reader

This version uses the works of E.A. Poe

## v1

This project is a recreation of the Poe-Reader built in React. The data comes from `https://www.gutenberg.org/`. First a NodeJS script uses results from [gutendex](https://github.com/garethbjohnson/gutendex) to build a list of books and their respective chapters. Then retrieves all the story contents. That data is then saved to a JSON file and used to select/view what book and what story the viewer would like to read.

It was inspired by a very old project where html downloads were used. It was a primitive version compared to this.

It was created with `create-react-app` so you can run it accordingly:

1. Clone repo
2. Install packages
3. Run `npm start`
4. Start reading

Things Used:

- Reactjs
- ChakraUI
- React Icons
- React Router
- Zustand
- Context API (converted to Zustand)
- Jest
- HTML5 Video
- Netlify for deployment
- Google fonts (Lato | Merriweather)

## Coming Soon

- Animated Scrolling

** This does NOT include the scraper I used to get the data from Project Gutenberg **

Image Credit:
Video Credit:
