import { Screen } from "./Screen";

import React, { useState } from 'react'

export function ValueScreen(props: any) {
  

  return (
    <div className='border-solid border-2 border-black border-opacity-40 rounded-md self-center p-2 bg-gray-400' >
        <Screen input={props.input[0]} name='Price' ></Screen>
        <Screen input={props.input[1]} name='Cash'></Screen>
        
    </div>
  )
}

