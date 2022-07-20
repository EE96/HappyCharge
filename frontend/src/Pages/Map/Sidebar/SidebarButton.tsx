import React from 'react'
import styles from './Sidebar.module.css'

type Props = {
    text: string;
    handleClick: () => void;
}

function SidebarButton({text, handleClick}: Props) {
    return (
        <button className={ styles.sidebarbutton } onClick={handleClick}>{text}</button>
    )
}

export default SidebarButton