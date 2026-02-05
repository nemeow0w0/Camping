'use client'

import { SignOutButton } from '@clerk/nextjs'
import { toast } from "sonner"

const SignOutLinks = () => {

    const handleLogout = () => {
        toast.success("logout success",{position:'bottom-center'})
}
  return (
    <SignOutButton redirectUrl="/">
        <button 
        className='w-full text-left cursor-pointer'
        onClick={() => handleLogout()}>logout</button>
    </SignOutButton>
  )
}
export default SignOutLinks