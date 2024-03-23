import { useState,useRef } from 'react'
import './Mode.scss'

export function Mode(){
    const [isActive ,setActive ] = useState(false)
    const modeRef = useRef()
    console.log(modeRef.current,'hdhjdsk')
    return(
        <div className="mode">
             <div className="mode-color">
                 <div className="circle" ref={modeRef}></div>
                 <span></span>
            </div>
        </div>
    )
}