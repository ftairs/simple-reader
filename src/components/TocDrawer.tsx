import React from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
import Toc from "./Toc";
import { TiBook } from "react-icons/ti";

function TocDrawer({}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        width={10}
        height={10}
        top={4}
        right={0}
        background={"gray.500"}
        position={"fixed"}
        onClick={onOpen}
        borderRadius={"30px 0 0 30px"}
        transition={"0.3s ease all"}
        _hover={{ background: "brand.main", right: "-4px", cursor: "pointer" }}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <TiBook color="white" size={26} />
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
          <DrawerHeader>Table of Contents</DrawerHeader>
          <DrawerBody display="flex" alignItems={"center"}>
            <Toc externalAction={onClose} showCount={false} compact />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default TocDrawer;
