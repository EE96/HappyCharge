import React from "react"
import { useQuery } from "@tanstack/react-query";

import Client from "../../Client/client";

import styles from "./MapLayout.module.css";

export default function MarkerView({ chargeDeviceId }: { chargeDeviceId: string }) {

    const { error, data } = useQuery(['markerData', chargeDeviceId], () =>
        new Client().fetchChargeDevice(chargeDeviceId)
    )

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
        ChargeDeviceName,
        ChargeDeviceShortDescription,
        Charges,
        Connectors
    } = data

    return (
        <div className={styles.markerviewcontainer}>
            <div className={styles.markerviewheading}>
                <h5>{ChargeDeviceName}</h5>
                <p>{ChargeDeviceShortDescription}</p>
                <p>{Charges} charges and counting!</p>
            </div>
            <div className={styles.markerviewbody}>
                <ul>
                    {Connectors.map((connector) => (
                        <li>{connector.RatedOutputkW}kW ---- {connector.ChargePointStatus}</li>
                    ))}
                </ul>

            </div>
            <div className={styles.markerviewbuttons}>
                <button>Charge Here</button>
                <button>Submit Fault Report</button>
            </div>
        </div>





    )




}