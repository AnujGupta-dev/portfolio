import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { BackgroundBeamsWithCollision } from "@/components/ui/beams";
import { FloatingNav } from "@/components/ui/FloatingNabar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gray-950 flex justify-center items-center flex-col  mx-auto sm:px-10 px-5 overflow-x-hidden select-none">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[{name: "About", link:'#about'},{name: "Projects", link:'#projects'}, {name: "Contacts", link:'#contact'}]}/>
        <Hero />
        <Grid />
        <RecentProjects/>
        <Approach />
        <BackgroundBeamsWithCollision><Footer/></BackgroundBeamsWithCollision>
      </div>
    </main>
  );
}
