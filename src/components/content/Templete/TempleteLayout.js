import React from 'react'
import{Link} from 'react-router-dom'
import logo from '../logo/logo.jpg'
import './TempleteLayout.css'
import Draggable from 'react-draggable'

function TempleteLayout() {
    return (
        <div id="image">
          <Draggable>
            <p className='imgThumb'>
            <img src={logo} alt="" />
            <Link to="temp1">
            <span><button >Get Templete</button></span>
            </Link>
            </p>
            </Draggable>
            <Draggable>
            <p className='imgThumb'>
            <img src={logo} alt="" />
            <Link to="temp2">
            <span><button >Get Templete</button></span>
            </Link>
            </p>
            </Draggable>
            <p className='imgThumb'>
            <img src={logo} alt="" />
            <Link to="temp3">
            <span><button >Get Templete</button></span>
            </Link>
            </p>
            <p className='imgThumb'>
            <img src={logo} alt="" />
            <Link to="temp4">
            <span><button >Get Templete</button></span>
            </Link>
            </p>
        </div>
    
      )
   
}

export default TempleteLayout
