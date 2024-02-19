import { extendTheme } from "@chakra-ui/react";

const config = {
  brandColor: "#fc5603",
  brandGrade: `linear(to-br,#fc5603 , #fc9803)`,
};

export const theme = extendTheme({
  initialColorMode: "light",
  fonts: {
    heading: `'Merriweather', sans-serif`,
    body: `'Lato', sans-serif`,
  },
  colors: {
    brand: {
      main: config.brandColor,
      grade: config.brandGrade,
    },
  },
  components: {
    Container: {
      variants: {
        basic: {
          maxW: "100%",
          w: "800px",
        },
      },
    },
    Button: {
      baseStyle: {},
      variants: {
        branded: {
          bg: config.brandColor,
          bgGradient: config.brandGrade,
          paddingX: 10,
          paddingY: 8,
          borderRadius: 100,
          color: "white",
          fontSize: 22,
        },
      },
    },
  },
  styles: {
    global: {
      ".js-view": {},
      ".js-view pre": {
        whiteSpace: "pre-line",
      },
      ".js-view p": {
        marginBottom: 8,
        textIndent: "24px",
      },
      ".js-view p.center": {
        textAlign: "center",
        fontWeight: "bold",
        marginY: 8,
      },
      ".js-view p.poem": {
        textAlign: "center",
        fontWeight: "bold",
        fontStyle: "italic",
        fontFamily: "serif",
        marginY: 8,
      },
      ".js-view p.letter": {
        fontFamily: "script",
      },
      ".js-view h3": {
        fontWeight: "bold",
        marginBottom: "8px",
      },
      ".js-view *:first-child": {
        display: "none",
      },
    },
  },
});
