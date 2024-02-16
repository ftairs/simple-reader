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
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";

function MenuDrawer({}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const menu = [
    {
      label: "Home",
      to: "/",
    },
    {
      label: "Viewer",
      to: "/viewer",
    },
    {
      label: "TOC",
      to: "/toc",
    },
  ];

  return (
    <>
      <Box
        width={10}
        height={10}
        top={4}
        left={0}
        background={"gray.500"}
        position={"fixed"}
        onClick={onOpen}
        borderRadius={"0 30px 30px 0"}
        transition={"0.3s ease all"}
        _hover={{ background: "brand.main", left: "-4px", cursor: "pointer" }}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <TiThMenu color="white" size={24} />
      </Box>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton
            color={"white"}
            _hover={{
              background: "none",
              transform: "scale(1.3) rotate(180deg)",
            }}
          />
          <DrawerHeader bg="brand.main" paddingY={10} color="white" mb={10}>
            Simple Reader v2 <br />
            <small>E.A. Poe Edition</small>
          </DrawerHeader>

          <DrawerBody>
            {menu.map((item: { label: string; to: string }, index: number) => {
              return (
                <UnorderedList
                  key={index + 1}
                  onClick={onClose}
                  margin="0"
                  listStyleType={"none"}
                >
                  <ListItem
                    fontSize={20}
                    mb={4}
                    _hover={{ color: "brand.main" }}
                  >
                    <Link to={item.to}>{item.label}</Link>
                  </ListItem>
                </UnorderedList>
              );
            })}
          </DrawerBody>

          <DrawerFooter opacity={0.5}>
            Created by Victor Fuentes - 2024
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default MenuDrawer;
