import Hero from '@/app/ui/home/hero'
import Dashboards from "@/app/ui/home/dashboards";

export default function Home() {
  return (
    <div className="">
        <main className="overflow-hidden">
            <Hero/>
            <Dashboards/>
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">


        </footer>
    </div>
  );
}
