//@ts-nocheck
import React from 'react'
// import {Wrapper, Status} from "@googlemaps/react-wrapper";
import styles from "./MapLayout.module.css"
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';


export default function InteractiveMap() {
    

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyAVrkd6EW6k9m0wIvznJk5Ok6yKGUHJFtY"
      })

    const containerStyle = {
        width: '1200px',
        height: '500px'
      };

    const center = {
        lat:55.5,
        lng:-4.3
    }
    const [map, setMap] = React.useState(null)
      
    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map)
      }, [])
    
      const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
      }, [])
    
      return isLoaded ? (
    //   return (
          <GoogleMap mapContainerClassName={ styles.container }
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            <Marker position={center}/>
            {/* <div>Woof</div> */}
            { /* Child components, such as markers, info windows, etc. */ }
            {/* <></> */}
          </GoogleMap>
    //   ) 
      ) : <></>


}