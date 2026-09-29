import Image from 'next/image'
import React from 'react'

const Icon = () => {
  return (
    <div>
      <div className='flex gap-18'>
        <Image src={'/assets/Icon.png'} width={200} height={200}></Image>
         <Image src={'/assets/Icon1.png'} width={200} height={200}></Image>
          <Image src={'/assets/Icon2.png'} width={200} height={200}></Image>
           <Image src={'/assets/Icon3.png'} width={200} height={200}></Image>
            <Image src={'/assets/Icon4.png'} width={200} height={200}></Image>
            
      </div>
    </div>
  )
}

export default Icon
