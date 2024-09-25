import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex flex-col justify-end h-screen pb-32 mx-auto bg-cover bg-center">
      <div className="relative">
        <Image
          className='w-full'
          src="/Home/Cleaning.png"
          alt="MultiPest"
          width={1220}
          height={663}
        />
        <div className="absolute inset-0 bg-dark-green bg-opacity-50 flex flex-col items-center justify-center">
          <h1 className="text-white text-[96px] font-bold mb-4 italic text-center">Keep Your Home<br></br> Safe</h1>
          <div className="flex space-x-4 text-xl">
            <button className="btn bg-normal-green hover:bg-dark-green text-white h-[56px] w-[202px] rounded border-none">BOOK NOW</button>
            <button className="btn btn-outline border-normal-green hover:border-dark-green hover:bg-transparent hover:text-white text-white h-[56px] w-[202px] rounded">CONTACT US</button>
          </div>
        </div>
      </div>
    </div>
  );
}