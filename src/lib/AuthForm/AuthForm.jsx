import { DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const AuthForm = ({ formType, setFormType }) => {
    const handleSignIn = ()=>{

    }
    const handleSignUp = ()=>{
        
    }
    return (
        <div>
            <DialogContent className="bg-[#3B3B3B]">
                <DialogHeader>
                    <h1 className="text-center font-semibold text-white text-3xl my-6">Fauget</h1>
                    <DialogTitle className="text-center font-semibold text-white text-3xl">{formType === 'signIn' ? 'Sign In' : 'Sign Up'}</DialogTitle>
                    <DialogDescription>
                        {formType === 'signIn' ?
                            <form onSubmit={handleSignIn} className="flex flex-col px-10 bg-[#3B3B3B]">
                                <label className="flex" htmlFor="email">Name: </label>
                                <input className="input-field" type="email" name="email" />
                                <label htmlFor="password">Password:</label>
                                <input className="input-field" type="password" name="password" />
                                <input className="btn my-6 w-1/2 text-center bg-[#060606] cursor-pointer " type="submit" value="Sign In" />
                                <p className="text-gray-400">Do not Have A Account? Create an Account  <span className="cursor-pointer text-[#060606] underline" onClick={() => setFormType("signUp")}>SignUp</span></p>
                            </form>
                            : (<form onSubmit={handleSignUp} className="flex flex-col px-10 bg-[#3B3B3B]">
                                <label className="flex" htmlFor="email">Name: </label>
                                <input className="input-field" type="email" name="email" />
                                <label htmlFor="password">Password:</label>
                                <input className="input-field" type="password" name="password" />
                                <label htmlFor="password">Confirm Password:</label>
                                <input className="input-field" type="password" name="password" />
                                <input className="btn my-6 w-1/2 text-center bg-[#060606] cursor-pointer " type="submit" value="Sign Up" />
                                <p className="text-gray-400">Have account? Sign in  account   <span className="cursor-pointer text-[#060606] underline" onClick={() => setFormType("signIn")}>signIn</span></p>
                            </form>)}
                    </DialogDescription>
                </DialogHeader>
                {/* Additional form fields based on formType */}
            </DialogContent>
        </div>
    );
};

export default AuthForm;
