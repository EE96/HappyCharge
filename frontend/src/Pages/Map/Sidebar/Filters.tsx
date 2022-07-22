import React, { useState } from 'react'
import styles from './Sidebar.module.css'

export default function Filters() {

    // const [clicked, setClick] = useState(false);

    // if (clicked === true) {
    return(
        <form className={ styles.filtertray }>
            <h3 className= {styles.checkboxlabel }>Filter by Charging Speed</h3>
            <br></br>
            
            <input  type="checkbox" id="rapid"></input>
            <label className = { styles.checkboxlabel } htmlFor="slow">Rapid</label>
            <br></br>    
            
            <input type="checkbox" id="fast"></input>
            <label className = { styles.checkboxlabel } htmlFor="fast">Fast</label>
            <br></br>    
            
            <input type="checkbox" id="slow"></input>
            <label className = { styles.checkboxlabel } htmlFor="slow">Slow</label>
            <br></br>

            <input className = { styles.submitbutton } type="submit" value="Apply"></input> 
        </form>
        )
    }
//     else
//      {
//         return(
//         <div className={ styles.closedfiltertray }></div>
//         )
//     }
// }

    // can't think of how to use state to change the style the filter uses from closed to open, the change happens in the parent file
    // (sidebar), can't set state outside of function it relates to AFAIK