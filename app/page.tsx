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
            <div className="mt-48 mb-16 w-full bg-gradient from-emerald-300 to-emerald-900 dark:text-slate-600 px-6"
                 id="footer">
                <p className={`text-center text-sm`}>© {new Date().getFullYear()} Austin Bowers</p>
                <p className={`text-center text-sm`}>Website Designed and Developed by <u className={`decoration-blue-500 text-white`}>Austin Bowers</u></p>
            </div>
        </footer>
    </div>
  );
}
