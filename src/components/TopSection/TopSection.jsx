"use client"
import { useState } from 'react';
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import AuthForm from "@/lib/AuthForm/AuthForm";

const TopSection = () => {
    const [formType, setFormType] = useState(null);

    const handleSignInClick = () => {
        setFormType('signIn');
    };

    const handleSignUpClick = () => {
        setFormType('signUp');
    };

    return (
        <div className="flex justify-between w-full pt-8">
            <h1>Welcome,claudia Alvies</h1>
            <div className="flex gap-4">
                <Dialog>
                    <DialogTrigger><button onClick={handleSignInClick} className="px-14 py-2 rounded-full bg-[#060606] text-white">Sign In</button></DialogTrigger>
                    <DialogTrigger><button onClick={handleSignUpClick} className="px-14 py-2 rounded-full bg-[#202020]/90 text-white">Sign Up</button></DialogTrigger>
                    <AuthForm formType={formType} />
                </Dialog>
            </div>
        </div>
    );
};

export default TopSection;
