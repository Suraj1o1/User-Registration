import React from 'react'
type Image ={
    brandname: string;
    logo:string;

}

const Images = ({brandname,logo}:Image) => {
  return (
    <div>
    <p className=''>{brandname}</p><img src={logo} alt="" />
    </div>
  )
}

export default Images
