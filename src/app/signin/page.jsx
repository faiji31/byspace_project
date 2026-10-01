import {  Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


export const metadata = { title: "Courses | Sign in" };

const page = () => {
  return (
    <div>
     <div>
      <main className='relative max-w-7xl mx-auto mt-20 mb-20 overflow-hidden rounded-4xl bg-[#0A38F5]'>
         <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
       
        <div className='relative mx-auto grid min-h-screen max-w-6xl items-center gap-10 px-5 py-8 lg:grid-cols-2'>
            <section className='text-white'>
              <Image src={'/assets/logo.png' } alt='' height={30} width={30}></Image>
              <h2 className='text-2xl mt-10 font-semibold'>Sign up and come in</h2>
              <p className="mt-2 max-w-sm text-[12px] font-light">
                The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at <br /> no cost
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
                <Image className="absolute left-1 top-0 hidden md:block" src={'/assets/ring-lime.png'} alt='' height={150} width={150}>

                </Image>
                 <Image className="absolute left-1 top-67 hidden md:block" src={'/assets/pyramid-lime.png'} alt='' height={150} width={150}>

                </Image>
                 <Image className="absolute left-50 top-55  " src={'/assets/faiji.png'} alt='' height={150} width={150}>

                </Image>
               
              
             <div  className="absolute bottom-0 right-4 w-[190px] rounded-xl bg-[#CBF41A] p-3 text-[#0B1B5C]">

              <p className="text-[12px]">
                Happy Students
              </p>
               <div className='flex items-center gap-2'>
                <p className="text-xs font-bold">4.5 <span className='font-light text-[12px]'>(240K)</span> </p>
               <p><Star className='size-4'></Star></p>

               </div>
              <div className="mt-2 flex items-center">

                <div className="flex -space-x-2">
                  <div className="h-7 w-7 rounded-full bg-gray-300" />
                  <div className="h-7 w-7 rounded-full bg-gray-400" />
                  <div className="h-7 w-7 rounded-full bg-gray-500" />
                  <div className="h-7 w-7 rounded-full bg-gray-600" />
                   <div className="h-7 w-7 rounded-full bg-gray-600" />
                    
                </div>

                <span className="ml-auto rounded-full bg-lime-300 px-2 py-1 text-[8px]">
                  2K+
                </span>

              </div>

            </div>
            


              </div>

            </section>
             <section className="w-full max-w-md justify-self-center rounded-2xl bg-white p-16 lg:justify-self-end">
          <p className="text-xs text-[#0A38F5]">Create an Account</p>
          <h1 className="mb-6 text-3xl font-semibold text-[#1F2340]">
            Welcome to ByteSpace
          </h1>
 
          <form className="space-y-4">
            <div>
              <label className="mb-1 block text-xs">Email</label>
              <input
                type="name"
                placeholder="Enter your Name"
                className="h-10 w-full rounded-lg border border-gray-200 bg-[#F6F7FA] px-3 text-sm"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs">Email</label>
              <input
                type="email"
                placeholder="designer@example.com"
                className="h-10 w-full rounded-lg border border-gray-200 bg-[#F6F7FA] px-3 text-sm"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs">Password</label>
              <input
                type="password"
                placeholder="**********"
                className="h-10 w-full rounded-lg border border-gray-200 bg-[#F6F7FA] px-3 text-sm"
              />
            </div>
            <button
              type="button"
              className="mt-2 ml-auto block rounded-full bg-[#CBF41A] px-6 py-2 text-sm font-medium text-[#0B1B5C]"
            >
              Continue
            </button>
          </form>
 
          
 
          <div className="flex justify-center gap-4">
            <span>
       
            </span>
            <span>

            </span>
          </div>
 
          <p className="mt-8 text-center text-xs text-gray-500">
            Already have an account?{" "}
            <Link href="/register" className="text-[#0A38F5]">
              Login
            </Link>
          </p>
        </section>


        </div>

      </main>
    </div>
    </div>
  )
}

export default page
