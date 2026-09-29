import Banner from "@/components/home/Banner";
import Icon from "@/components/home/Icon";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
     <Banner></Banner>
     <Icon></Icon>
    </div>
  );
}
