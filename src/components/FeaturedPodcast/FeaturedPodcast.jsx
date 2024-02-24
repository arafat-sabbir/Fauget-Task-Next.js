import Image from "next/image";
import { PiPlayCircleLight } from "react-icons/pi";

const FeaturedPodcast = ({ data }) => {
    const slicedData = data?.slice(0, 5)
    return (
        <div className="grid grid-cols-5  gap-32 justify-items-center mt-10">
            {
                slicedData?.map((item, index) => <div className="flex  flex-col items-center gap-2 text-white relative " key={index}>
                    <div className="relative">
                        <Image src={item.album.cover} alt="podcast Cover" width={200} height={200} className="rounded-[34px] object-cover " ></Image>
                        <div className="inset-0 rounded-[34px] absolute bg-slate-950/50 h-full w-full "></div>
                    </div>
                    <p>{item.album.title}</p>
                    <h3 className="absolute top-16 left-16 text-white"><PiPlayCircleLight size={70} /></h3>
                </div>)
            }
        </div>
    );
};

export default FeaturedPodcast;