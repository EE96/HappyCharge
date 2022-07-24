import React from 'react'
import Sidebar from './Sidebar/Sidebar';
import styles from './MapLayout.module.css'
import InteractiveMap from './InteractiveMap';
import {Wrapper, Status} from "@googlemaps/react-wrapper";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";


function Map() {

//     const { isLoaded } = useJsApiLoader({
// //@ts-ignore
//         // googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
//         id:"google-map",
//         googleMapsApiKey: "AIzaSyAVrkd6EW6k9m0wIvznJk5Ok6yKGUHJFtY",
//         libraries: ["places"],
//     })

//     if (!isLoaded) return <div>LOADING...</div>
    return (
    <div className={ styles.mapLayout }>
        <Sidebar/>
        <InteractiveMap />
    </div>   
    )
}

export default Map;