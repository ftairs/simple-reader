import React from "react";
import BasicNav from "../components/BasicNav";
import {Button, Heading, Text} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";
import TocDrawer from "../components/TocDrawer";

const Home = () => {

    const navigate = useNavigate();
    const handleOpenToc = () => {
        console.log('attempting to open sidebar');
        navigate('/toc');
    };

    return (
        <div>
            <Heading>
                Simple Reader
                <small>- E.A. Poe Edition</small>
            </Heading>
            <Text>
                This reader uses scraped text from Project Gutenberg using THISLINK to gather the needed ids. It's not
                continually scraped but stored as a JSON file, then loaded into this app.
            </Text>
            <Button onClick={handleOpenToc}>
                Open TOC
            </Button>
        </div>
    );
};

export default Home;