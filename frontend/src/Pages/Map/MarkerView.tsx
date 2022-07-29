import React from "react"
import styles from "./MapLayout.module.css";

export default function MarkerView({ markerId }: { markerId: string }){
    return (
        <div className= { styles.markerviewcontainer }>
            <div className= { styles.markerviewheading }>
                {/* <h5>ChargeDevice Name</h5> */}
                <h5>{markerId}</h5>
                <p>Charge Device Short Description</p>
            </div>
            <div className={ styles.markerviewbody }>
                <ul>
                    <li>Connector Speed ---- Availability</li>
                    <li>Connector Speed ---- Availability</li>
                    <li>Connector Speed ---- Availability</li>
                </ul>

            </div>
            <div className={ styles.markerviewbuttons }>
                <button>Charge Here</button>
                <button>Submit Fault Report</button>
            </div>
        </div>





    )




}