import React from 'react'

import styles from './MapLayout.module.css'
import MarkerView from './MarkerView';


// export default function MarkerInfoTabUnclicked(props) {    // props, not destructured, missing type annotation
// export default function MarkerInfoTabUnclicked({ chargeDeviceId }) {   // props, destructured, no type annotation
export default function MarkerInfoTab({ chargeDeviceId }: { chargeDeviceId: string | null }) { // destructured props, with type annotation



    return (
        chargeDeviceId ?
            <div className={styles.markerinfotab}>
                <MarkerView chargeDeviceId={chargeDeviceId} />
                {/* <p>Marker Clicked </p> */}
            </div>
        :
            <div className={styles.markerinfotab}>
                <p>Select a marker to view information on charging devices at that location, register a charge, and submit fault reports. </p>
            </div>

    )
}
