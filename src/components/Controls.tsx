import { useState } from "react";
import { Box, useColorMode, useColorModeValue } from "@chakra-ui/react";
import {
  TiAdjustContrast,
  TiArrowDown,
  TiArrowSortedDown,
  TiArrowUp,
  TiZoomIn,
  TiZoomOut,
} from "react-icons/ti";
import useViewerStore from "../store/ViewerStore";
import ControlType from "../types/ControlType";

// TODO: v1.5 automated scrolling, single speed
// TODO: v2 multiple speeds for scrolling

function Controls() {
  const viewerStore = useViewerStore((store: any) => store);
  const { toggleColorMode } = useColorMode();
  const barBg = useColorModeValue("gray.100", "black");
  const [hideControls, setHideControls] = useState(false);

  const controls: ControlType[] = [
    {
      label: "Scroll Down",
      icon: <TiArrowDown size={32} />,
      action: () => {
        window.scrollTo({
          left: 0,
          top: window.scrollY + 100,
          behavior: "smooth",
        });
      },
    },
    {
      label: "Scroll Up",
      icon: <TiArrowUp size={32} />,
      action: () => {
        window.scrollTo({
          left: 0,
          top: window.scrollY - 100,
          behavior: "smooth",
        });
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
        viewerStore.increaseZoomLevel();
      },
    },
    {
      label: "Zoom Out",
      icon: <TiZoomOut size={32} />,
      action: () => {
        viewerStore.decreaseZoomLevel();
      },
    },
  ];
  return (
    <Box
      backgroundColor={barBg}
      width={"100%"}
      position={"fixed"}
      left={0}
      bottom={0}
      zIndex={3}
      display={"flex"}
      paddingY={2}
      justifyContent={"space-around"}
      transform={`translateY(${hideControls ? "100%" : "0%"})`}
      transition={"0.3s ease all"}
      _hover={{
        transform: `translateY(${hideControls ? "80%" : "0%"})`,
      }}
    >
      <Box
        width={"46px"}
        height={"46px"}
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
        <Box
          transform={`rotate(${hideControls ? "180" : "0"}deg)`}
          transition={"0.3s ease all"}
        >
          <TiArrowSortedDown size={32} />
        </Box>
      </Box>
      {controls.map((item) => {
        return (
          <Box
            key={item.label}
            onClick={item.action}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            flexDir={"column"}
            paddingY={2}
            paddingX={4}
            borderRadius={10}
            userSelect={"none"}
            _hover={{
              backgroundColor: "brand.main",
              bgGradient: `linear(to-br,#fc5603 , #fc9803)`,
              color: "white",
            }}
          >
            <Box>{item.icon}</Box>
          </Box>
        );
      })}
    </Box>
  );
}

export default Controls;
