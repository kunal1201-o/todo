import React from 'react'
import './Input.css'
const InputBox = (props) => {
    return (
        <div>
          <div className="input-box"><input type="text" /> </div>  
          <span onClick={
            ()=>{props.addToListHandler({pice:1000,name:'i phone 11'})}
          }>+</span>
        </div>
    )
}

export default InputBox
