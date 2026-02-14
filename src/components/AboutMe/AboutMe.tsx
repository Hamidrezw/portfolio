import Image from "next/image";
import TitleContent from "../Layout/TitleContent";

const AboutMe = () => {
  return (
    <div className="bg-foreground" id="AboutMe">
      <div className="bg-[url(/images/aboutmebg.png)] bg-center bg-no-repeat bg-cover py-10 md:py-20">
        <TitleContent title="AboutMe" content="Who am I?" />
        <div className="flex items-center justify-center gap-6 mt-4 mx-auto px-3 sm:px-0 container ">
          <div>
            <div className="bg-background px-6 py-3 mx-auto sm:mx-0 border-primary border-2 flex items-center justify-center text-white font-ubuntu text-4xl rounded-tl-[30px] rounded-br-[30px] w-fit">
              About Me
            </div>
            <div className="bg-background px-5 xl:px-10 py-3 xl:py-6 mt-8 rounded-[40px] font-mono max-w-200">
              <span className="text-primary-light text-lg">{"<p>"}</span>
              <p className="text-white text-lg my-2 sm:my-4 ml-1 sm:ml-3">
                <span className="text-primary text-4xl">Hi!</span>
                <br />
                I’m Hamidreza — a Front-End Developer focused on building
                modern, fast, and user-friendly web interfaces. I mainly work
                with <span className="text-primary">React</span>,{" "}
                <span className="text-primary">Next.js</span>, and{" "}
                <span className="text-primary">Tailwind CSS</span> , and I enjoy
                turning ideas into clean and functional digital experiences. I
                strongly believe in clean code, performance, and
                maintainability, and I always aim to build products that provide
                real value to users.,{" "}
              </p>
              <span className="text-primary-light text-lg">{"</p>"}</span>
            </div>
          </div>
          <Image
            src="/images/laptop.png"
            className="hidden xl:block"
            alt="laptop"
            width={460}
            height={550}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
