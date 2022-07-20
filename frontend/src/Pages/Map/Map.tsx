import React from 'react'
import Sidebar from './Sidebar/Sidebar';
import styles from './MapLayout.module.css'

function Map() {
    return (
    <div className={ styles.mapLayout }>
        <Sidebar/>
    </div>   
    )
}

export default Map;