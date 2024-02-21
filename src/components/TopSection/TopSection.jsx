import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import AuthForm from "@/lib/AuthForm/AuthForm";


const TopSection = () => {
    return (
        <div className="flex justify-between w-full pt-8">
            <h1>Welcome,claudia Alvies</h1>
            <div className="flex gap-4">

                <Dialog>
                    <DialogTrigger><button className="px-14 py-2 rounded-full bg-[#060606] text-white">Sign In</button></DialogTrigger>
                    <button className="px-14 py-2 rounded-full bg-[#202020]/90 text-white">Sign Up</button>
                    <AuthForm />
                </Dialog>
            </div>
        </div>
    );
};

export default TopSection;