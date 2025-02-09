import Banner from "./component/banner/Banner";
import Footer from "./component/footer/Footer";
import Navbar from "./component/header/Navbar";
import ResponsiveMenu from "./component/header/ResponsiveMenu";
import OurFeatures from "./section/our-features/OurFeatures";
import OurSolution from "./section/our-solution/OurSolution";
import OurPartner from "./section/out-partner/OurPartner";
import WhatWeServe from "./section/what-we-serve/WhatWeServe";
import WhoWeAre from "./section/who-we-are/WhoWeAre";


export default function Home() {
  return (
    <>
      <header className="bg-black" >
        <Navbar />

        <div>
          <menu className="relative">
            <ResponsiveMenu />
          </menu>
        </div>
      </header>

      <main className="">
        <Banner />
        <WhatWeServe />
        <WhoWeAre />
        <OurSolution />
        <OurFeatures />
        <OurPartner />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );

}
