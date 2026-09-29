import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <div >
      <Link className='flex items-center gap-1' href={'/'}>
             <Image alt='bytespace-logo' src={'/assets/logo.png'} width={20} height={20}></Image>
             <span className="font-bold text-lg text-white">ByteSpace</span>
      </Link>
    </div>
  )
}

export default Logo
