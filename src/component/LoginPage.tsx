"use client"
import React, { useContext, useState } from 'react'
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/utils/cn";
import { Context, CustomContextType } from '@/app/context/CustomContext';
import { useRouter } from 'next/navigation';
const LoginPage = () => {
  const router = useRouter()
  const { setData } = useContext<CustomContextType>(Context);
  const [error, setError] = useState<any | null>({})
  const [FormData, setFormData] = useState({
    fName: "",
    lName: "",
    pass: ""
  })
  let checkError: any = {
    fName: [
      { required: true, message: "Enter Your First name" }
    ],
    lName: [
      { required: true, message: "Enter Your Last name" }
    ],
    pass: [
      { required: true, message: "Enter Your Password" },
      { length: 5, message: "Enter Correct Password" }
    ]
  }
  const Checking = (data: any) => {
    let pass = 50099
    let obj: any = {}
    Object.entries(data).forEach(([key, value]: [string, any]) => {
      checkError[key].some((rule: any) => {
        if (rule.required && !value) {
          obj[key] = rule.message
          return true
        }
        if (rule.length && value != pass) {
          obj[key] = rule.message
          return true
        }
      })
    })
    setError(obj)
    return obj
  }
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const errors = Checking(FormData);
    if (Object.keys(errors).length) {
      return
    } else {
      setData({
        ...FormData
      });
      localStorage.setItem('fName', FormData.fName)
      localStorage.setItem('lName', FormData.lName)
      setFormData({
        fName: "",
        lName: "",
        pass: ""
      })
      router.push('/quiz')
    }
  };
  const handleFormData = (e: any) => {
    setFormData((pre: any) => {
      return { ...pre, [e.target.name]: e.target.value }
    })
    setError({
      fName: "",
      lName: "",
      pass: ""
    })
  }
  return (
    <section className='w-full relative my-28 md:my-20'>
      <div className='max-w-[80%] md:max-w-[50%] mx-auto'>
        <div className='flex flex-col justify-center items-center w-full'>
          <div className='text-center mb-8 md:mb-2'>
            <h1 className="font-bold text-3xl dark:text-neutral-200">WELCOME TO AS QUIZ APP</h1>
            <p className="text-sm max-w-sm mt-2 dark:text-neutral-300">Login before starting Quiz</p>
          </div>
          <form className="my-8 w-full" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
              <LabelInputContainer>
                <Label htmlFor="firstname">First name</Label>
                <Input id="firstname" placeholder="Tyler" type="text" name='fName' onChange={handleFormData} value={FormData.fName} />
                <p className='text-sm text-red-600'>{error.fName}</p>
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastname">Last name</Label>
                <Input id="lastname" placeholder="Durden" type="text" name='lName' onChange={handleFormData} value={FormData.lName} />
                <p className='text-sm text-red-600'>{error.lName}</p>
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="my-10">
              <Label htmlFor="password">Password</Label>
              <Input id="password" placeholder="••••••••" type="password" name='pass' onChange={handleFormData} value={FormData.pass} />
              <p className='text-sm text-red-600'>{error.pass}</p>
            </LabelInputContainer>
            <button
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              Sign up &rarr;
              <BottomGradient />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-3 w-full", className)}>
      {children}
    </div>
  );
};

export default LoginPage