import React, { useState } from "react";
import SidebarButton from "./SidebarButton";
import styles from "./Sidebar.module.css";
import Filters from "./Filters";
import Nearby from "./Nearby";

export default function Sidebar() {

    // string for state | null
    const [subMenu, setSubMenu] = useState<string | null>(null);

    const makeToggleSubMenu = (woof: string) => {
        return () => {
            if (subMenu === woof) {
                setSubMenu(null);
            } else {
                setSubMenu(woof);
            }
        }
    }

    return (
        <>
            <SidebarButton text="Filter" handleClick={makeToggleSubMenu('filters')} />
            <SidebarButton text="Nearby" handleClick={makeToggleSubMenu('nearby')} />
            {
                subMenu === 'filters'
                    ? <Filters />
                    : (subMenu === 'nearby'
                        ? <Nearby />
                        : null)
            }
        </>
    )
}