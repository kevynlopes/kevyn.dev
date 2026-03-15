import HeroSection from "@/components/HeroSection";
import MainSection from "@/components/MainSection";

export default function Home() {
  return (
    <div>
      <h1 className="text-accent text-6xl font-bold">
        <HeroSection />
        <MainSection />
      </h1>
    </div>
  );
}
