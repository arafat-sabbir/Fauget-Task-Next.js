import Category from "@/components/Category/Category";
import FeaturedPodcast from "@/components/FeaturedPodcast/FeaturedPodcast";
import Navbar from "@/components/Navbar/Navbar";
import TopBanner from "@/components/TopBanner/TopBanner";
import { getPodcastData } from "@/lib/getpodcastdata";
import Image from "next/image";

export default async function HomePage() {
  const data = await getPodcastData();
  return (
    <div>
      <div className="">
        <TopBanner />
        <Category />
        <FeaturedPodcast data={data} />
      </div>
    </div>
  );
}
