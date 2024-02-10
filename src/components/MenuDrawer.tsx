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
    Box, UnorderedList, ListItem
} from "@chakra-ui/react";
import {Link} from "react-router-dom";

function MenuDrawer({}) {
    const {isOpen, onOpen, onClose} = useDisclosure();

    const menu = [
        {
            label: 'Home',
            to: '/'
        },
        {
            label: 'Viewer',
            to: '/viewer'
        },
        {
            label: 'TOC',
            to: '/toc'
        },
    ]

    return (
        <>
            <Box width={10} height={10}
                 top={0}
                 left={0}
                 position={"fixed"}
                 background={"red"}
                 onClick={onOpen}>Menu</Box> <Drawer
            isOpen={isOpen}
            placement='left'
            onClose={onClose}
        >
            <DrawerOverlay/>
            <DrawerContent>
                <DrawerCloseButton/>
                <DrawerHeader>Poe Reader</DrawerHeader>

                <DrawerBody>
                    {menu.map((item: { label: string; to: string }, index: number) => {
                        return <UnorderedList key={index + 1} onClick={onClose}>
                            <ListItem><Link to={item.to}>{item.label}</Link></ListItem>
                        </UnorderedList>
                    })}
                </DrawerBody>

                <DrawerFooter>
                    Created by Victor Fuentes - 2024
                </DrawerFooter>
            </DrawerContent>
        </Drawer></>
    );
}

export default MenuDrawer;