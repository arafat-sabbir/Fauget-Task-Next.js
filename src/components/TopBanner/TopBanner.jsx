import { useSession } from "next-auth/react";
import { Niconne } from "next/font/google";
import Image from 'next/image';
import { PiCrownSimpleLight } from "react-icons/pi";

// Call the font loader and assign it to a constant at the module level
const niconneFont = Niconne({ weight: "400", subsets: ["latin"], display: "swap" });

const TopBanner = () => {
    const { data: session } = useSession()
    return (
        <div>
            {
                session ?
                    <div className="bg-[url('https://i.ibb.co/4Z76xzx/Rectangle-2.png')] relative px-6 pt-4 bg-cover bg-no-repeat h-[332px] w-full mt-16">
                        <p className="flex items-center gap-4 text-white text-2xl font-semibold tracking-wide"> <PiCrownSimpleLight className="text-white" size={56} /> No Ads & Unlock All Paid Songs </p>
                        {/* Use the className property from the font loader */}
                        <p className={`${niconneFont.className} text-5xl font-semibold text-white`}>Premium Membership</p>
                        <p className="text-lg mt-4 w-[775px] text-white font-semibold tracking-wide">It is a long established fact that a is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.</p>
                        <div className="flex gap-4 mt-10">
                            <button className="btn bg-[#060606]">Upgrade Now</button>
                            <button className="btn bg-[#044C57]">Learn more</button>
                        </div>
                        <div className="bg-[url('https://i.ibb.co/GHvy82F/image-2.png')] h-72 bg-top w-44 absolute right-4 bottom-0 bg-cover">

                        </div>
                    </div>
                    :
                    <div className="bg-[url('https://i.ibb.co/jJC4L5K/apixcel-home-banner.webp')] relative px-6 pt-4 bg-cover bg-no-repeat h-[332px] w-full mt-16">
                        <p className="flex items-center gap-4 text-white text-lg my-4 font-semibold tracking-wide"> Top play music station </p>
                        {/* Use the className property from the font loader */}
                        <p className={`${niconneFont.className} text-5xl font-semibold text-white`}>The Dark Side of Music: Unveiling Its Negative Effects</p>
                        <p className="text-lg mt-4 w-[882px] text-justify text-white font-semibold tracking-wide">Music, often regarded as a universal language, possesses a profound impact on individuals and societies alike. While it has long been celebrated for its ability to evoke emotions, foster connections, and uplift spirits, the flip side of the melody reveals a spectrum of adverse effects that are often overlooked</p>
                        <button className="btn mt-4 bg-[#060606]/40">For You?</button>
                    </div>
            }
        </div>
    );
};

export default TopBanner;
