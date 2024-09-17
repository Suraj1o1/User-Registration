import React from 'react'
type Props={
    Username:string;
    Location:string;
    useremail:string;
}
export default function UserProfileCard({Username,Location,useremail}:Props) {
  return (
    <div className="bg-blue-950 flex flex-col mt-5 rounded-lg text-white h-full items-center justify-evenly w-full">
      <div>Username: {Username}</div>
      <div>Location: {Location}</div>
      <div>Useremail: {useremail}</div>
      <div>hello This is utsav</div>
    </div>
  )
}
