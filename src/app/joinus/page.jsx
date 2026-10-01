import { Star } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
      <main className='relative max-w-7xl mx-auto mt-20 mb-20 overflow-hidden bg-[#0A38F5]'>
        <div  style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
>

        </div>
        <div className='relative mx-auto grid min-h-screen max-w-6xl items-center gap-10 px-5 py-8 lg:grid-cols-2'>
            <section className='text-white'>
              <Image src={'/assets/logo.png' } alt='' height={30} width={30}></Image>
              <h2 className='text-lg font-semibold'>Sign in with ease</h2>
              <p className="mt-2 max-w-sm text-sm">
                Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.
              </p>
              <div className='relative mt-10 hidden h-[380px] max-w-[460px] lg:block'>
                <Image src={'/assets/course-card-1.png'} alt='' width={373} height={384} className='absolute left-0 top-24 w-[220px] rounded-3xl'>
                </Image>
                 <Image  
              src={'/assets/course-card-2.png'}
              alt=""
              width={373}
              height={384}
              className="absolute left-[70px] top-0 w-[270px] rounded-3xl"

>
                </Image>
               
                <div className="absolute bottom-0 right-4 w-[190px] rounded-xl bg-[#CBF41A] p-3 text-[#0B1B5C]">
              <p className="text-sm font-semibold">Happy Students</p>
              <p className="text-xs">4.8 (2K+) <Star></Star></p>
            </div>


              </div>

            </section>


        </div>

      </main>
    </div>
  )
}

export default page
