import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import Toc from "./Toc";
import { TiBook } from "react-icons/ti";

function TocDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const buttonBackground = useColorModeValue("gray.300", "blackAlpha.500");

  return (
    <>
      <Box
        width={"46px"}
        height={"46px"}
        top={4}
        right={0}
        background={buttonBackground}
        position={"fixed"}
        onClick={onOpen}
        borderRadius={"30px 0 0 30px"}
        transition={"0.3s ease all"}
        _hover={{
          bgGradient: `linear(to-br,#fc5603 , #fc9803)`,
          right: "-4px",
          cursor: "pointer",
          color: "white",
        }}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        zIndex={3}
      >
        <TiBook size={26} />
      </Box>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={"lg"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton
            _hover={{
              background: "none",
              transform: "scale(1.3) rotate(180deg)",
            }}
          />
          <DrawerHeader fontFamily={"heading"}>Table of Contents</DrawerHeader>
          <DrawerBody display="flex" alignItems={"center"}>
            <Toc externalAction={onClose} showCount={false} compact />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default TocDrawer;
