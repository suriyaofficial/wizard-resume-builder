import React from 'react'
import { useSelector, useDispatch } from "react-redux";

function Resumeprev() {
    const Preview = useSelector((state) => state.Templete1data);
  return (
    
    <div>
      <h1>haiiiiii</h1>
      <span >{Preview}</span>
    </div>
  )
}

export default Resumeprev
