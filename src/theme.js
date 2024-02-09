import {extendTheme} from "@chakra-ui/react";

export const theme = extendTheme({
    initialColorMode: "light",
    colors: {
        brand: {
            main: "#fc5603",
        },
    },
    styles: {
        global: {
            "html, body": {
                fontFamily: "serif",
            },
            "#js-view": {},
            "#js-view p": {
                marginBottom: "4%",
                lineHeignt: "1",
            },
            "#js-view *:first-child": {
                display: "none",
            },
        },
    },
});
