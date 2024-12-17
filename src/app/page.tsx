import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Achievement from "@/components/Acheivement";
import Project from "@/components/Project";
import Skill from "@/components/Skill";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Achievement />
      <Project />
      <Skill />
      <Contact />
      <Footer />
    </>
  );
};

export default MainLayout;
