import React, { useContext, useState } from "react";
import { Box, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { ViewerContext } from "../store/ViewerContext";
import {
  TiAdjustContrast,
  TiArrowDown,
  TiArrowUp,
  TiZoomIn,
  TiZoomOut,
} from "react-icons/ti";

function Controls() {
  const viewerCtx = useContext(ViewerContext);
  const { colorMode, toggleColorMode } = useColorMode();
  const barBg = useColorModeValue("gray.50", "black");
  const [hideControls, setHideControls] = useState(false);

  const controls = [
    {
      label: "Scroll Down",
      icon: <TiArrowDown size={32} />,
      action: () => {
        window.scrollTo(0, window.scrollY + 100);
      },
    },
    {
      label: "Scroll Up",
      icon: <TiArrowUp size={32} />,
      action: () => {
        window.scrollTo(0, window.scrollY - 100);
      },
    },
    {
      label: "Color Mode",
      icon: <TiAdjustContrast size={32} />,
      action: () => {
        toggleColorMode();
      },
    },
    {
      label: "Zoom In",
      icon: <TiZoomIn size={32} />,
      action: () => {
        viewerCtx.increaseZoomLevel();
      },
    },
    {
      label: "Zoom Out",
      icon: <TiZoomOut size={32} />,
      action: () => {
        viewerCtx.decreaseZoomLevel();
      },
    },
    // {
    //     label: 'Autoscroll',
    //     icon: 'AS',
    //     action: () => {
    //
    //     }
    // },
  ];
  return (
    <Box
      background={barBg}
      position={"fixed"}
      left={0}
      bottom={0}
      width={"100%"}
      zIndex={3}
      display={"flex"}
      paddingY={2}
      justifyContent={"space-around"}
      transform={`translateY(${hideControls ? "100%" : "0%"})`}
      transition={"0.3s ease all"}
    >
      <Box
        width={10}
        height={10}
        position={"absolute"}
        left="50%"
        top={-10}
        borderRadius={"20px 20px 0 0"}
        background={barBg}
        transform="translateX(-50%)"
        onClick={() => {
          setHideControls((prev) => {
            return !prev;
          });
        }}
        display="flex"
        alignItems={"center"}
        justifyContent={"center"}
      >
        {hideControls && <TiArrowUp size={32} />}
        {!hideControls && <TiArrowDown size={32} />}
      </Box>
      {controls.map((item) => {
        return (
          <Box
            onClick={item.action}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            flexDir={"column"}
            paddingY={2}
            paddingX={4}
            borderRadius={10}
            userSelect={"none"}
            _hover={{ background: "brand.main", color: "white" }}
          >
            <Box>{item.icon}</Box>
            {/* <Box>{item.label}</Box> */}
          </Box>
        );
      })}
    </Box>
  );
}

export default Controls;
