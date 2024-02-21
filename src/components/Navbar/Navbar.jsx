import SectionTitle from "@/lib/SectionTitle/SectionTitle";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="bg-[#3B3B3B] w-[250px]  h-screen pl-8 py-10">
            <SectionTitle name={"Menu"} />
            <h1 className="text-white text-[30px]">Fauget</h1>
            <div className="flex flex-col text-white text-xl font-semibold">
                <Link href={"/"}>Home</Link>
                <Link href={"/podcast"}>Podcast</Link>
                <Link href={"/setting"}>Settings</Link>
                <span className="">Logout</span>
            </div>
        </div >
    );
};

export default Navbar;