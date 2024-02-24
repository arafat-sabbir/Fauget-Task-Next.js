import { useSession } from "next-auth/react";
import Image from 'next/image';
const TopBanner = () => {
    const { data: session } = useSession()
    return (
        <div>
            {
                session ?
                    <><div className="bg-[url('https://i.ibb.co/4Z76xzx/Rectangle-2.png')] bg-cover bg-no-repeat h-[332px] w-full mt-16">
                        jkladfk
                    </div></>
                    :
                    ""
            }
        </div>
    );
};

export default TopBanner;