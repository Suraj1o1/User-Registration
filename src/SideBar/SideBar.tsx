import React from 'react'
type Prop={
    img:string;
    sidebarTitle:string;
}

export default function SideBar({img,sidebarTitle}:Prop) {
  return (
    <div className=' text-red-200 flex flex-row ml-2 mt-2 items-center content-center gap-2' >
      <div className='my-5'><img src={img} alt="" width={20} height={20}/></div>
      <div>{sidebarTitle}</div>
    </div>
  )
}
