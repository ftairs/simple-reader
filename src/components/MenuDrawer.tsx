import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  useDisclosure,
  Box,
  UnorderedList,
  ListItem,
  Link as ChakraLink,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  TiArrowRight,
  TiBook,
  TiEye,
  TiHome,
  TiSocialGithub,
  TiThMenu,
} from "react-icons/ti";

function MenuDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const buttonBackground = useColorModeValue("gray.300", "blackAlpha.500");

  const menu = [
    {
      label: "Home",
      to: "/",
      icon: <TiHome />,
    },
    {
      label: "Viewer",
      to: "/viewer",
      icon: <TiEye />,
    },
    {
      label: "TOC",
      to: "/toc",
      icon: <TiBook />,
    },
  ];

  return (
    <>
      <Box
        width={"46px"}
        height={"46px"}
        top={4}
        left={0}
        background={buttonBackground}
        position={"fixed"}
        onClick={onOpen}
        borderRadius={"0 30px 30px 0"}
        transition={"0.3s ease all"}
        _hover={{
          background: "brand.main",
          left: "-4px",
          cursor: "pointer",
          color: "white",
        }}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        zIndex={3}
      >
        <TiThMenu size={24} />
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
            <UnorderedList margin="0" listStyleType={"none"}>
              {menu.map(
                (
                  item: { label: string; to: string; icon: any },
                  index: number
                ) => {
                  return (
                    <ListItem key={index + 1} marginBottom={4}>
                      <ChakraLink
                        onClick={onClose}
                        fontSize={20}
                        _hover={{ color: "brand.main" }}
                      >
                        <Link
                          to={item.to}
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <Box mr={4}>{item.icon}</Box>
                          {item.label}
                        </Link>
                      </ChakraLink>
                    </ListItem>
                  );
                }
              )}
            </UnorderedList>
          </DrawerBody>

          <DrawerFooter flexDir={"column"}>
            <Box
              as={Link}
              to={"https://github.com/ftairs"}
              target="_blank"
              display="flex"
              alignItems={"center"}
              background="black"
              color="white"
              width="100%"
              padding={4}
              mb={4}
              borderRadius={16}
            >
              <Box>
                <TiSocialGithub size={42} />
              </Box>
              <Box flex={1}>View on Github</Box>
              <Box>
                <TiArrowRight />
              </Box>
            </Box>
            Created by Victor Fuentes - 2024
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default MenuDrawer;
