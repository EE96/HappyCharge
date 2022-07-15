import React from 'react'

type Props = {
    text: string;
    handleClick: () => void;
}

function SidebarButton({text, handleClick}: Props) {
    return (
        <button onClick={handleClick}>{text}</button>
    )
}

export default SidebarButton