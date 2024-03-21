import HeroPage from "@/components/hero";
import Navbar from "@/components/navbar";
import Services from "@/components/services";
import Resume from "@/components/resume";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Clients from "@/components/clients";
import Projects from "@/components/projects";


export default function Home() {
  return (
   <>
    <Navbar/>
    <div className="pt-40 px-8 md:px-20 lg:px-30  xl:px-36">
    <main>   

    <HeroPage/>
    <div className="border-2 border-muted mt-10"></div>
    <Services/>
    <div className="border-2 border-muted mt-10"></div>
    <Projects/>
    <div className="border-2 border-muted mt-10"></div>

    <Resume/>
    <div className="border-2 border-muted mt-10"></div>
    <Clients/>
    <div className="border-2 border-muted mt-10"></div>
    <Contact/>
    <div className="border-2 border-muted mt-10"></div>
    </main>
    <Footer/>
    </div>
   </>
    
  );
}
