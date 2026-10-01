import Banner from "@/components/home/Banner";
import BrandIcons from "@/components/home/BrandIcons";
import Discover from "@/components/home/Discover";
import CategoryCards from "@/components/cards/CategoryCards";
import Hero from "@/components/home/Hero";
import CreatorBanner from "@/components/home/CreatorBanner";
import Community from "@/components/home/Community";

const Home = () => {
  return (
    <main className="w-full overflow-hidden bg-white">
      <Banner />

      <BrandIcons />

      <Discover />

      <CategoryCards />

      <Hero />

      <CreatorBanner />
      <Community></Community>
    </main>
  );
};

export default Home;
