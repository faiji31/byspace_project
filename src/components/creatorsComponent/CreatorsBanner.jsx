import React from "react";

const CreatorsBanner = ({
  name = "PurePearl Studio",
  role = "Passionate UI/UX, Web designer",
  avatar = "/assets/creator.png", 
  bio = [
    "Welcome to the creative world of [Creator's Name]. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together! ive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.",
  ],
  products = 3,
  followers = 12,
  onFollow,
}) => {
  return (
    <section className="relative w-full overflow-hidden bg-[#0A38F5]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-10 pt-8 md:px-[72px]">
        <div className="flex items-center gap-4">
          <div className="h-[60px] w-[60px] shrink-0 overflow-hidden rounded-2xl bg-[#F8A7B8]">
            <img
              src={avatar}
              alt={name}
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-2xl font-semibold leading-tight text-white">
                {name}
              </h2>
              <span className="rounded-full bg-[#CBF41A] px-3.5 py-1 text-xs font-medium text-[#0B1B5C]">
                Creator
              </span>
            </div>
            <p className="mt-1 text-sm text-white/90">{role}</p>
          </div>
        </div>

        <div className="mt-8 max-w-[760px] space-y-0 text-[12px] font-light leading-6 text-white/70">
          {bio.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-white px-5 py-2 text-sm text-[#0B1B5C]">
              <span className="mr-1 font-medium text-[#0A38F5]">{products}</span>
              Products
            </div>
            <div className="rounded-full bg-white px-5 py-2 text-sm text-[#0B1B5C]">
              <span className="mr-1 font-medium text-[#0A38F5]">{followers}</span>
              Followers
            </div>
          </div>

          <button
            type="button"
            onClick={onFollow}
            className="rounded-full bg-[#CBF41A] px-7 py-2 text-sm font-medium text-[#0B1B5C] transition hover:brightness-95 active:scale-95"
          >
            Follow
          </button>
        </div>
      </div>
    </section>
  );
};

export default CreatorsBanner;