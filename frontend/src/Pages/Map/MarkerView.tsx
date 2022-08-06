import React, { useState } from "react"
import { useQuery, useQueryClient } from "@tanstack/react-query";

import Client from "../../Client/client";

import styles from "./MapLayout.module.css";

export default function MarkerView({ chargeDeviceId }: { chargeDeviceId: string }) {

    const queryClient = useQueryClient()

    const { error, data } = useQuery(['markerData', chargeDeviceId], () =>
        new Client().fetchChargeDevice(chargeDeviceId)
    )

    const [hasCharged, setHasCharged] = useState(false)


    //dont need react query for this one, just need to know that the request was successful
    const handleChargeClick = async () => {
        try{
            setHasCharged(true)
            await new Client().chargeAtDevice(chargeDeviceId)
            queryClient.invalidateQueries(['markerData', chargeDeviceId])
        } catch{
            console.log("Unsuccessful")
            setHasCharged(false)
        }
    }

    //charge click boolean - make that one of the array parameters that triggers a re-render, useref? 



    if (!data) {
        return (
            <div className={styles.markerviewcontainer}>
                <div className={styles.markerviewheading}>
                    <h5>Grabbing data...</h5>
                </div>
            </div>
        )
    }

    const {
        chargeDeviceName,
        chargeDeviceShortDescription,
        charges,
        connectors
    } = data

    return (
        <div className={styles.markerviewcontainer}>
            <div className={styles.markerviewheading}>
                <h5>{chargeDeviceName}</h5>
                <p>{chargeDeviceShortDescription}</p>
                <p>{charges} charges and counting!</p>
            </div>
            <div className={styles.markerviewbody}>
                <ul>
                    {connectors.map((connector) => (
                        <li>{connector.ratedOutputkW}kW ---- {connector.chargePointStatus}</li>
                    ))}
                </ul>

            </div>
            <div className={styles.markerviewbuttons}>
                <button onClick={handleChargeClick} disabled={hasCharged}>Charge Here</button>
                <button>Submit Fault Report</button>
            </div>
        </div>
    )
}