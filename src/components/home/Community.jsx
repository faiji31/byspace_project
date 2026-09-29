import Image from 'next/image';
import React from 'react';

const community = [
  {
    name: 'Sarah M.',
    role: 'Enthusiastic Learner',
    avatar: '/assets/avatar-sarah.jpg',
    quote:
      '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
  },
  {
    name: 'James L.',
    role: 'Lifelong Learner',
    avatar: '/assets/avatar-james.jpg',
    quote:
      '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
  },
  {
    name: 'Alex B.',
    role: 'Inspired Creator',
    avatar: '/assets/avatar-alex.jpg',
    quote:
      '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
  },
];

const Community=()=> {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 px-6 md:px-12">

      <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-[#E2F87B]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-200/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
     
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-start">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Discover What Our <br />
            Community Is Saying
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            At ByteSpace, our vibrant community of learners and creators is at the
            heart of what we do. Hear directly from those who have experienced the
            transformative journey of learning and creating on our platform. Explore
            testimonials that reflect the diverse perspectives of enthusiastic learners
            and accomplished creators.
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {community.map((item, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col justify-between"
            >
              <div>
               
                <div className="relative w-16 h-16 mb-5 overflow-hidden rounded-full ring-2 ring-white shadow-sm">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

          
                <h3 className="text-lg font-bold text-slate-900">{item.name}</h3>
                <p className="text-sm font-medium text-blue-600 mb-6">
                  {item.role}
                </p>

             
                <p className="text-gray-800 text-sm leading-relaxed font-normal">
                  {item.quote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Community