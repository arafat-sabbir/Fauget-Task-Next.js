"use client"
import { useState } from 'react';
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import AuthForm from "@/components/AuthForm/AuthForm";

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
                    <DialogTrigger><div onClick={handleSignInClick} className="btn bg-[#060606] ">Sign In</div></DialogTrigger>
                    <DialogTrigger><div onClick={handleSignUpClick} className="btn bg-[#202020]/90 ">Sign Up</div></DialogTrigger>
                    <AuthForm formType={formType} setFormType={setFormType} />
                </Dialog>
            </div>
        </div>
    );
};

export default TopSection;
