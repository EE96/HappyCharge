import React from 'react'

import Sidebar from './Sidebar/Sidebar';
import styles from './MapLayout.module.css'
import { InteractiveMap } from './InteractiveMap';
import MarkerInfoTab from './MarkerInfoTab';

function MapPage() {
    const [markerId, setMarkerId] = React.useState<string| null>(null);

    const handleMarkerClick = (newMarkerId: string) => {
        if (newMarkerId === markerId) {
            setMarkerId(null);
        } else {
            setMarkerId(newMarkerId);
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

export default MapPage;