import React, { use, useState } from 'react'
import Creatorscard from '@/Dashboard/CreatorsCard'
import Navbar from './Navbar'
import SocialPlatform from '@/Dashboard/SocialPlatform'
import LandingPage from '@/MovieRecomedation/LandingPage'
import GetApi from '@/API/getApi'
import RegistrationForm from '@/RegistrationForm/RegistrationForm'
const MainPage = () => {
  return (
    <>
    <div className='Main-Page'>
    {/* <LandingPage/> */}
    <RegistrationForm/>
    
  </div>
  </>
  )
}

export default MainPage
