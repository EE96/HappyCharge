import React, { useState } from "react";
import SidebarButton from "./SidebarButton";
import styles from "./Sidebar.module.css";
import Filters from "./Filters";
import Nearby from "./Nearby";
import RoutePlanner from "./RoutePlanner"

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
        <div className={ styles.overlay }>
            <SidebarButton text="Filter Chargers" handleClick={makeToggleSubMenu('filters')} />
            <SidebarButton text="Nearby Chargers" handleClick={makeToggleSubMenu('nearby')} />
            <SidebarButton text="Route Planning" handleClick={makeToggleSubMenu('routeplanner')}/> 
            {
                subMenu === 'filters'
                    ? <Filters />
                    : (subMenu === 'nearby'
                        ? <Nearby />
                            : (subMenu === 'routeplanner')
                                ? <RoutePlanner />
                                    : null)

            }
        </div> 
    )
}