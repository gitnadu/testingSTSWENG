import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <nav className="relative z-50 flex justify-between items-center bg-normal-green px-4 shadow-md h-max font-sans">
      <div className="flex items-center h-max text-cusBlue">
        <Link href="/" className="mr-8 flex items-center"><Image className='mr-2'
          src="/NavBar/logo.png"
          alt="MultiPest"
          width={98}
          height={85}
        /><div className='text-white text-2xl font-semibold '>MultiPest Services</div></Link>
      </div>
      <div className="flex items-center text-white gap-20 text-xl pr-16 h-max">
        <Link href="/Services" className="flex items-center gap-3">
          <div>Location</div>
          <Image className=''
          src="/NavBar/Location.png"
          alt="MultiPest"
          width={15}
          height={17.45}
        />
        </Link>
        <Link href="/client/home" className="flex items-center gap-3">
          <div>Services</div>
          <Image className=''
          src="/NavBar/Services.png"
          alt="MultiPest"
          width={15}
          height={17.45}
        />
        </Link>
        <Link href="/Services" className="flex items-center gap-3">
          <div>Contact Us</div>
          <Image className=''
          src="/NavBar/Contact Us.png"
          alt="MultiPest"
          width={15}
          height={17.45}
        />
        </Link>
      </div>
    </nav>
  )
}

export default NavBar
