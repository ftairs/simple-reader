import React from 'react';
import {
    Drawer, DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
    Button,
    useDisclosure,
    Box
} from "@chakra-ui/react";
import Toc from "./Toc";

function TocDrawer({}) {
    const {isOpen, onOpen, onClose} = useDisclosure();

    return (
        <>
            <Box width={10} height={10}
                 top={0}
                 right={0}
                 background={"red"}
                 position={"fixed"}
                 onClick={onOpen}>TOC</Box>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
            >
                <DrawerOverlay/>
                <DrawerContent>
                    <DrawerCloseButton/>
                    <DrawerHeader>header</DrawerHeader>

                    <DrawerBody>
                        <Toc externalAction={onClose}/>
                    </DrawerBody>

                </DrawerContent>
            </Drawer></>
    );
}

export default TocDrawer;