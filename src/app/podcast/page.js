import { getPodcastData } from "@/lib/getpodcastdata";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PiPlayCircleLight } from "react-icons/pi";

const Podcast = async () => {
  const data = await getPodcastData();

  return (
    <div className="text-white font-semibold text-2xl group cursor-pointer">
      <div className="grid grid-cols-5  gap-16 justify-items-center mt-10">
        {data?.map((item, index) => (
          <Link
            href={`/podcastdetail/${item.album.id}`}
            className="flex  flex-col items-center gap-2 text-white relative "
            key={index}
          >
            <div className="relative">
              <Image
                src={item.album.cover}
                alt="podcast Cover"
                width={300}
                height={300}
                className="rounded-[34px] object-cover "
              ></Image>
              <div className="inset-0 rounded-[34px] absolute bg-slate-950/50 h-full w-full "></div>
            </div>
            <p>{item.album.title}</p>
            <h3 className="absolute top-24 left-22 text-white">
              <PiPlayCircleLight size={70} />
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Podcast;
