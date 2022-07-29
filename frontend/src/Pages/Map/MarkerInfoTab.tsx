import React from 'react'
import styles from './MapLayout.module.css'
import MarkerView from './MarkerView';
import { chargers } from "../../chargers";


// export default function MarkerInfoTabUnclicked(props) {    // props, not destructured, missing type annotation
// export default function MarkerInfoTabUnclicked({ markerId }) {   // props, destructured, no type annotation
export default function MarkerInfoTabUnclicked({ markerId }: { markerId: string | null }) { // destructured props, with type annotation



    return (
        markerId ?
            <div className={styles.markerinfotab}>
                <MarkerView markerId={markerId} />
                {/* <p>Marker Clicked </p> */}
            </div>
        :
            <div className={styles.markerinfotab}>
                <p>Select a marker to view information on charging devices at that location, register a charge, and submit fault reports. </p>
            </div>

    )
}
