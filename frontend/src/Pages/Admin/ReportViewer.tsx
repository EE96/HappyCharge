import React from 'react'
import styles from './Admin.module.css'
import FaultReport from './FaultReport'

export default function ReportViewer() {
    return (
        <div className={ styles.reportviewer }>
            <h1 className={ styles.viewertitle }>Reports</h1>
            <ul>
                <FaultReport />
                <FaultReport />
                <FaultReport />
                <FaultReport />
                <FaultReport />
            </ul>
        </div>

    )
}