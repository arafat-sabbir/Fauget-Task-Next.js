import { DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const AuthForm = ({ formType }) => {
    return (
        <div>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{formType === 'signIn' ? 'Sign In' : 'Sign Up'}</DialogTitle>
                    <DialogDescription>
                        {formType === 'signIn' ? 'Enter your credentials to sign in.' : 'Create a new account.'}
                    </DialogDescription>
                </DialogHeader>
                {/* Additional form fields based on formType */}
            </DialogContent>
        </div>
    );
};

export default AuthForm;
