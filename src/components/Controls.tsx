import React, {useContext} from 'react';
import {Box, useColorMode} from "@chakra-ui/react";
import {ViewerContext} from "../store/ViewerContext";

function Controls() {

    const viewerCtx = useContext(ViewerContext);
    const {colorMode, toggleColorMode} = useColorMode();

    const controls = [
        {
            label: 'Scroll Down',
            icon: 'D',
            action: () => {
                window.scrollTo(0, (window.scrollY + 100))
            }
        },
        {
            label: 'Scroll Up',
            icon: 'U',
            action: () => {
                window.scrollTo(0, (window.scrollY - 100))
            }
        },
        {
            label: 'Zoom In',
            icon: 'ZI',
            action: () => {
                viewerCtx.increaseZoomLevel();

            }
        },
        {
            label: 'Zoom Out',
            icon: 'ZO',
            action: () => {
                viewerCtx.decreaseZoomLevel();
            }
        },
        // {
        //     label: 'Autoscroll',
        //     icon: 'AS',
        //     action: () => {
        //
        //     }
        // },
        {
            label: 'Color Mode',
            icon: 'CM',
            action: () => {
                toggleColorMode();
            }
        }
    ];
    return (
        <Box background={"grey"}
             position={"fixed"}
             left={0}
             bottom={0}
             width={"100%"}
             zIndex={3}
             display={"flex"}
        >
            {controls.map((item) => {
                return <Box flex={1} onClick={item.action}>
                    {item.icon} - {item.label}
                </Box>
            })}
        </Box>
    );
}

export default Controls;