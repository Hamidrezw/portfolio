import Image from "next/image";

interface Props {
  title: string;
  image: string;
  des: string;
  live: string;
  code: string;
}

const techs = [
  {
    title: "React",
    link: "https://react.dev/",
  },
  {
    title: "Next.js",
    link: "https://nextjs.org/",
  },
  {
    title: "Tailwind",
    link: "https://tailwindcss.com/",
  },
];

const ProjectCard = ({ data }: { data: Props }) => {
  return (
    <div className="bg-background border-primary border-2 rounded-xl transition-all duration-250 group hover:shadow-[0_0_20px_rgba(18,247,214,0.6)] p-4">
      <div className="relative h-50">
        <Image src={data.image} alt="" className="rounded-lg" fill />
      </div>
      <div className="flex flex-col items-center text-white font-ubuntu select-none">
        <h2 className="text-3xl my-3 group-hover:text-primary transition-all duration-250 line-clamp-1">
          {data.title}
        </h2>
        <p className="text-lg text-center line-clamp-2">{data.des}</p>
        <div className="w-full h-0.5 bg-linear-to-r from-gray-800/30 via-gray-600 to-gray-800/30 my-4" />
        <div className="flex items-center gap-2 justify-center text-primary-light group-hover:text-primary transition-all duration-250 text-lg font-medium font-mono">
          {techs.map((item) => (
            <a
              key={item.title}
              className="flex items-center gap-2 after:content-['·'] after:text-xl after:relative after:-top-px last:after:content-none"
              href={item.title}
              rel='nofollow'
              target="_blank"
            >
              {item.title}
            </a>
          ))}
        </div>
        <div className="flex items-center justify-center gap-4 mt-3">
          <a
            href={data.live}
            className="py-2 px-10 rounded-lg text-white border-2 border-secondary hover:border-primary transition-all duration-250 bg-[linear-gradient(0deg,rgba(18,247,214,0.25)_0%,rgba(41,47,54,1)_38%)] cursor-pointer"
            target="_blank"
            rel="nofollow"
          >
            Live
          </a>
          {data.code && data.code.length > 0 && (
            <a
              href={data.code}
              className="py-2 px-10 rounded-lg text-white border-2 border-secondary hover:border-primary transition-all duration-250 bg-[linear-gradient(0deg,rgba(18,247,214,0.25)_0%,rgba(41,47,54,1)_38%)] cursor-pointer"
              target="_blank"
              rel="nofollow"
            >
              code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
