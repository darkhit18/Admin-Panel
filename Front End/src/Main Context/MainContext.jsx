

import React, { createContext, useEffect, useState } from 'react'
export let ColorAction=createContext()
export default function MainContext({children}) {
    let [currentColor,setColor]=useState([])
    let obj={currentColor,setColor}
useEffect(()=>{
  // console.log(currentColor)
},[currentColor])

  return (
    <ColorAction.Provider value={obj}>
     {children}
    </ColorAction.Provider>
  )
}
