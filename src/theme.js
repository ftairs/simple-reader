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
          paddingY: 6,
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
        marginBottom: "4%",
      },
      ".js-view *:first-child": {
        display: "none",
      },
    },
  },
});
