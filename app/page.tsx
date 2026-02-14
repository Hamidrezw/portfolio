import AboutMe from "@/src/components/AboutMe/AboutMe";
import AboutMeCode from "@/src/components/AboutMe/AboutMeCode";
import ContactMe from "@/src/components/ContactMe/ContactMe";
import InfoCard from "@/src/components/InfoCard/InfoCard";
import Projects from "@/src/components/Projects/Projects";
import Skills from "@/src/components/Skills/Skills";
import TechStack from "@/src/components/TechStack/TechStack";

const Home = () => {
  return (
    <>
      <div className="my-10">
        <h1 className="text-center text-primary-light! font-ubuntu font-medium text-5xl lg:text-6xl">
          Web Developer
        </h1>
        <div className="flex justify-center xl:justify-between mx-auto px-3 sm:px-0 container flex-wrap gap-8 mt-10 lg:mt-16">
          <InfoCard />
          <AboutMeCode />
          <TechStack />
        </div>
      </div>
      <AboutMe />
      <Skills />
      <Projects />
      <ContactMe />
    </>
  );
}

export default Home;