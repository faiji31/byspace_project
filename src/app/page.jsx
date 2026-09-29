import CategoryCards from "@/components/cards/CategoryCards";
import Banner from "@/components/home/Banner";
import Discover from "@/components/home/Discover";
import Icon from "@/components/home/Icon";
import Hero from "@/components/home/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-[#f5f5f3] font-sans dark:bg-black">
      <section>
        <Banner></Banner>
      </section>
      <section>
        <Icon></Icon>
      </section>
      <section className="w-full">
        <Discover></Discover>
      </section>
      <section className="w-full">
        <CategoryCards></CategoryCards>
      </section>
      <section className="w-full bg-[#f5f5f3]">
        <Hero></Hero>
      </section>
    </div>
  );
}
