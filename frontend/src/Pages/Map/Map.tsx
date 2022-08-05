import React from 'react'

import Sidebar from './Sidebar/Sidebar';
import styles from './MapLayout.module.css'
import { InteractiveMap } from './InteractiveMap';
import MarkerInfoTab from './MarkerInfoTab';

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
            <MarkerInfoTab chargeDeviceId={markerId}/>
            <div className={styles.mapcontainer}>
                <InteractiveMap handleMarkerClick={handleMarkerClick} />
            </div>
        </div>
    )
}

export default Map;