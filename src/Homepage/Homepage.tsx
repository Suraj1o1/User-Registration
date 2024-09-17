"use client";
import UserProfileCard from '@/Card/UserProfileCard';
import Navbar from '@/Navbar/Navbar';
import SideBar from '@/SideBar/SideBar';
import { SidebarUtils } from '@/Utils/Utils';
import Link from 'next/link'
import React, { useState } from 'react'
export default function Homepage() {
const[sideTItle,setSideTitle]=useState(SidebarUtils)
const[isUser,SetIsUser]=useState(false)
const handleProfileClick=(user:any)=>{
  
    SetIsUser(user);
    // setInterval(() => {
    // SetIsUser(!user)
    
    // }, 3000);
    
}
  return (
    <div className='bg-gray-950 w-full h-screen flex flex-col flex-wrap  '>
     
      <div>
        <Navbar onProfileClick={handleProfileClick}>

        </Navbar>
       
      </div>


      <div className='flex items-center'>
        <div className='h-full flex-grow-5'>
           {sideTItle.map((title)=>{
            return<>
           
              <SideBar img={title.url} sidebarTitle={title.sidebartitle}/>
          
              </>
            })} 
        </div>
       {isUser &&
        <UserProfileCard Username="Utsav" useremail="utsav@123" Location="lalitpur"/>
       }
      
     
        </div>
       <div>
        
       </div>
        
      </div>
      
      
    
  )
}
