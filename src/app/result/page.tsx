"use client"
import React, { useContext } from 'react'
import { Context } from '../context/CustomContext'
import data from "@/data/data.json"
const Page = () => {
  let {correct} = useContext(Context) as any
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <div className='w-[350px] h-[170px] bg-gray-600 rounded-lg text-center p-3'>
        <h1 className='text-xl font-semibold mb-2'>{`Correct answers are   ${data.data.length}/${correct}`}</h1>
        <h2 className='text-lg'>Thanks for taking AS Quiz</h2>
        <p className='text-sm mt-2'>Made by Ammar Shaikh</p>
      </div>
    </div>
  )
}
export default Page