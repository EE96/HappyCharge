import React from 'react'
import styles from './Sidebar.module.css'
import NearbyChargerDisplay from './NearbyChargerDisplay'

export default function Nearby() {


    return(
        <div className={ styles.nearbytray }>
            <NearbyChargerDisplay />
            <NearbyChargerDisplay />
            <NearbyChargerDisplay />
            <NearbyChargerDisplay />
            <NearbyChargerDisplay />
        </div>
    )

}