import React from 'react'
import Sidebar from './Sidebar/Sidebar';
import styles from './MapLayout.module.css'
import { InteractiveMap } from './InteractiveMap';
import MarkerInfoTab from './MarkerInfoTab';
// import MarkerInfoTabUnclicked from './MarkerInfoTabUnclicked';
// import {Wrapper, Status} from "@googlemaps/react-wrapper";
// import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";


function Map() {
    const [markerId, setMarkerId] = React.useState<string| null>(null);

    const handleMarkerClick = (id: string) => {
        if (id === markerId) {
            setMarkerId(null);
        } else {
            setMarkerId(id);
        }
    };

    return (
        <div className={styles.container}>
            <Sidebar />
            <MarkerInfoTab markerId={markerId}/>
            <div className={styles.mapcontainer}>
                <InteractiveMap handleMarkerClick={handleMarkerClick} />
            </div>
        </div>
    )
}

export default Map;