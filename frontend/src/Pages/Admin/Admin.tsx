import React from 'react'
import styles from './Admin.module.css'
import FaultReport from './FaultReport'
import ReportViewer from './ReportViewer'

export default function Admin(){
    return(
        <div className={ styles.admincontainer }>
        <ReportViewer />
        </div>
    )
}