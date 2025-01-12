import Hero from '@/app/ui/home/hero'
import Dashboards from "@/app/ui/home/dashboards";
import Websites from "@/app/ui/home/websites";
import Artwork from "@/app/ui/home/artwork";
import Contact from "@/app/ui/home/contact";

export default function Home() {
  return (
    <div className="">
        <main className="overflow-hidden">
            <Hero/>
            <Dashboards/>
            <Websites/>
            <Artwork/>
            <Contact/>
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">


        </footer>
    </div>
  );
}
