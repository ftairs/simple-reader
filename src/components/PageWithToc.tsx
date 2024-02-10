import React from 'react';
import BasicNav from "./BasicNav";
import TocDrawer from "./TocDrawer";
import MenuDrawer from "./MenuDrawer";

function PageWithToc({children}: { children: any }) {
    return (
        <>
            <MenuDrawer/>
            <TocDrawer/>
            {children}
        </>
    );
}

export default PageWithToc;