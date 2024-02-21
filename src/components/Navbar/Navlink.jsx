"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";


const NavLink = ({ item }) => {

    // hooks
    const pathName = usePathname();
    console.log("send Item", item.path);
    console.log("from pathName", pathName);
    console.log(pathName === item.path);

    return (
        <Link href={item.path} className={`${pathName === item.path ? "text-[#069D95] transition duration-300" : "text-white"} flex items-center gap-3`}>
            {item.icon} {item.title}
        </Link>
    );
};

export default NavLink;