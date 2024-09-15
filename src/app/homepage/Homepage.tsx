"use client";
import Button from '@/Button/Button'
import Link from 'next/link'
import React from 'react'
export default function Homepage() {
  return (
    <div className='bg-gray-950 w-full h-screen flex flex-col content-center justify-center items-center flex-wrap  '>
      <div>
      <Link href="/">
            <Button
              onClick={()=>{}}
              name="Log out"
              classname="text-white bg-blue-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 mb-3 text-center dark:bg-orange-600 dark:hover:opacity-50 dark:focus:ring-blue-800 mt-1"
              spanClassname=""
            />
          </Link>
      </div>
    </div>
  )
}
