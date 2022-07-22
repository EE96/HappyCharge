import React from 'react'
import styles from './Sidebar.module.css'

export default function NearbyChargerDisplay() {
    return(
        <div className={ styles.nearby }>
            <h4 className={ styles.nearbyaddress }>Address Here</h4>
            <p className={ styles.nearbydistance }>Distance from Here</p>
            <button className={ styles.nearbybutton }>Go To</button>
        </div>
    )
}