import Image from 'next/image';
const TopRightSection = () => {
    return (
        <div className='flex items-center gap-4'> <input type="text" className='rounded-full px-4 py-2 bg-[#3B3B3B]' placeholder={` Artist, Music, Album, Etc`} /><Image src={"https://i.ibb.co/qFBrrvf/dummy-profile-pic-300x300-1-removebg-preview.png"} width={50} height={50} className='rounded-full' alt='user photo'></Image></div>
    );
};

export default TopRightSection;