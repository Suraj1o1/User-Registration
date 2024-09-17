import React from 'react'
type Button={
    classname:string;
    spanClassname:string;
    onClick: (e: any) => void;
    name:string;
    
}

const Button = ({classname,spanClassname,name,onClick}:Button) => {
  return (
    <div>
      <button  className={classname} onClick={onClick}> <span className={spanClassname}>
{name}
</span></button>
    </div>
  )
}

export default Button
