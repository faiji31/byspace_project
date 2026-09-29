import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <div>
      <Link href={'/'}>
             <Image alt='bytespace-logo' src={'/assets/logo.jpg'} width={120} height={90}></Image>
      </Link>
    </div>
  )
}

export default Logo
