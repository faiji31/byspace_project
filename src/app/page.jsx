import Banner from "@/components/home/Banner";
import Discover from "@/components/home/Discover";
import Icon from "@/components/home/Icon";
import Image from "next/image";

export default function Home() {
  return (
    <div  className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
       <section >
        <Banner></Banner>
       </section>
      <section>
         <Icon></Icon>
      </section>
      <section className="min-h-full">
        <Discover></Discover>
      </section>
    </div>
  );
}
