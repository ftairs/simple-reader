import React from 'react';
import MenuDrawer from "./MenuDrawer";

function PageBasic({children}: any) {
    return (
        <>
            <MenuDrawer/>
            {children}
        </>
    );
}

export default PageBasic;