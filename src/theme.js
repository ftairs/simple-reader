import { extendTheme } from "@chakra-ui/react";

const config = {
  brandColor: "#fc5603",
};

export const theme = extendTheme({
  initialColorMode: "light",
  colors: {
    brand: {
      main: config.brandColor,
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
      "html, body": {
        fontFamily: "Helvetica, sans-serif",
      },
      ".js-view": {},
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
