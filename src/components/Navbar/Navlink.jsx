"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";


const NavLink = ({ item }) => {
    // Hook To Get The Current Pathname
    const pathName = usePathname();
    return (
        <Link href={item.path} className={`${pathName === item.path ? "text-[#069D95] transition duration-300" : "text-white"} flex items-center gap-3`}>
            {item.icon} {item.title}
        </Link>
    );
};

export default NavLink;