"use client"
import { useState } from 'react';
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import AuthForm from "@/components/AuthForm/AuthForm";
import { useSession } from 'next-auth/react';
import { data } from 'autoprefixer';
import { IoSearchSharp } from "react-icons/io5";
import TopRightSection from './TopRightSection';

const TopSection = () => {
    const [formType, setFormType] = useState(null);
    const { data: session } = useSession()
    console.log(session?.user);

    const handleSignInClick = () => {
        setFormType('signIn');
    };

    const handleSignUpClick = () => {
        setFormType('signUp');
    };

    return (
        <div className="flex justify-between w-full pt-8">
            <h1 className='text-white font-semibold text-2xl tracking-wide'>Welcome,{session?.user ? session?.user?.username : "to fauget music services"}</h1>
            <div className="flex gap-4">
                <Dialog>
                    {session?.user ?
                        <TopRightSection />
                        : <>
                            <DialogTrigger><div onClick={handleSignInClick} className="btn bg-[#060606] ">Sign In</div></DialogTrigger>
                            <DialogTrigger><div onClick={handleSignUpClick} className="btn bg-[#202020]/90 ">Sign Up</div></DialogTrigger></>}
                    <AuthForm formType={formType} setFormType={setFormType} />
                </Dialog>
            </div >
        </div >
    );
};

export default TopSection;
