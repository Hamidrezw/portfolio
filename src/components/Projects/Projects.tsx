import TitleContent from "../Layout/TitleContent";
import ProjectCard from "./Card/ProjectCard";

const projects = [
  {
    title: "Ghate Pooshesh",
    image: "/images/gpc.png",
    des: "Modern corporate website",
    live: "https://ghatepoosheshchamran.com/",
    code: "https://github.com/Hamidrezw/ghate-pooshesh-chamran",
  },
  {
    title: "Behyab",
    image: "/images/behyab.png",
    des: "Business Showcase Site",
    live: "https://behyab.com/",
    code: "https://github.com/Hamidrezw/behyab",
  },
  {
    title: "Atbin Ista",
    image: "/images/Atbin.png",
    des: "Developing magnet pages and menus",
    live: "https://atbinista.com/",
    code: "",
  },
];

const Projects = () => {
  return (
    <div className="bg-foreground pt-5">
      <div
        className="py-15 bg-[url(/images/codehead.png)] bg-no-repeat bg-cover bg-center"
        id="Works"
      >
        <TitleContent
          title="Works"
          content="I had the pleasure of working with these awesome projects"
        />
        <div className="mx-auto px-5 sm:px-0 sm:container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
            {projects.map((item, i) => (
              <ProjectCard key={i} data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
