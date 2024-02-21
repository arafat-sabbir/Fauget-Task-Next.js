import SectionTitle from "@/lib/SectionTitle/SectionTitle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PiMusicNoteSimpleBold } from "react-icons/pi";
import { MdHome } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import NavLink from "./Navlink";

const Navbar = () => {
    const Navlinks = [{ path: "/", title: "Home", icon: <MdHome /> }, { path: "/podcast", title: "Podcast", icon: <PiMusicNoteSimpleBold /> }, { path: "/setting", title: "Settings", icon: <IoSettingsOutline /> }]
    return (
        <div className="bg-[#3B3B3B] w-[250px]  h-screen pl-8 py-10">
            <SectionTitle name={"Menu"} />
            <h1 className="text-white text-[30px]">Fauget</h1>
            <div className="flex flex-col text-white text-xl font-semibold space-y-4">
                {Navlinks?.map((item, index) => <NavLink key={index} item={item} />)}
                <span className="">Logout</span>
            </div>
        </div >
    );
};

export default Navbar;