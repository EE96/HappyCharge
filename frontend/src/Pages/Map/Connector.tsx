import React from "react"

type Props = {
    handleClick: (connectorId: string) => void
    connectorId: string
    ratedOutputkW: number,
    chargePointStatus: string,
}

export default function Connector({
    handleClick,
    connectorId,
    ratedOutputkW,
    chargePointStatus
}: Props) {

    return (
        <li>
            <p>{ratedOutputkW}kW</p>
            <p>{chargePointStatus}</p>
            <button
                className="reportbutton"
                onClick={() => handleClick(connectorId)}
            >
                Report Fault
            </button>
        </li>
    )
}