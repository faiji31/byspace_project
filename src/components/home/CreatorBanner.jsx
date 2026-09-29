const CreatorBanner=() =>{
  return (
    <section className="relative overflow-hidden bg-[#0A38F5] py-20">

   
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

  
      <div className="absolute -left-10 -top-5 h-20 w-28 rotate-12 rounded-full bg-[#C8FF00]" />

      <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full border-[30px] border-[#C8FF00]" />

      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">

        <h2 className="text-3xl font-bold leading-tight text-white">
          Unlock Your Potential as a
          <br />
          Creator with ByteSpace
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-xs leading-6 text-white/80">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators.
        </p>

        <button className="mt-7 rounded-full bg-[#C8FF00] px-6 py-3 text-sm font-semibold text-gray-900 transition hover:scale-105 hover:bg-[#d9ff4d]">
          Join as Creator
        </button>

      </div>
    </section>
  );
}

export default CreatorBanner