"use client"
import React, { useContext } from 'react'
import { Context } from '../context/CustomContext'
import data from "@/data/data.json"
const Page = () => {
  let { correct, skip, wrong } = useContext(Context) as any
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <div className='w-[360px] h-[180px] bg-blue-700 rounded-lg text-center p-3'>
        <h1 className='text-xl font-semibold'>{`Correct are ${correct} 👍`}</h1>
        <h1 className='text-xl font-semibold'>{`Wrong are ${wrong} 👎`}</h1>
        <h1 className='text-xl font-semibold'>{`Skip are ${skip} ❔ ` }</h1>
        <p className='text-lg'>Thanks for using this app</p>
        <p className='text-sm mt-2'>Made by Ammar Shaikh</p>
      </div>
    </div>
  )
}
export default Page