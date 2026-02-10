import Link from "next/link";

const AboutMeCode = () => {
  return (
    <div className="w-150">
      <span className="text-primary-light text-lg font-mono">{"<h1>"}</span>
      <div className="font-ubuntu">
        <h2 className="text-6xl ml-3 text-white my-4">
          Hey
          <br />
          I&apos;m <span className="text-primary">Hamidreza</span>
          <br />
          Front-end Developer
        </h2>
      </div>
      <span className="text-primary-light text-lg font-mono">{"</h1>"}</span>
      <br />
      <div className="mt-6 font-mono">
        <span className="text-primary-light text-lg font-mono">{"<p>"}</span>
        <p className="text-white text-xl ml-3 my-4">
          I build clean and modern front-end interfaces that help businesses
          grow. I&apos;m a developer who focuses on results, not excuses.
        </p>
        <span className="text-primary-light text-lg font-mono">{"</p>"}</span>
      </div>
      <Link
        href="mailto:hamidrezajob24@gmail.com"
        className="flex items-center gap-4 text-primary hover:text-white w-fit transition-colors duration-300 font-mono text-3xl mt-4 ml-3"
      >
        Let&apos;s Talk
        <div className="bg-secondary w-10 h-10 rounded-[40px] p-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.00007 5.98266C0.999912 5.99253 0.999896 6.00239 1.00002 6.01225V18C1.00002 19.6523 2.34774 21 4.00002 21H20C21.6523 21 23 19.6523 23 18V6.01236C23.0002 6.00242 23.0001 5.99247 23 5.98251C22.9905 4.33822 21.6465 3 20 3H4.00002C2.35352 3 1.00947 4.3383 1.00007 5.98266ZM3.1066 5.55395C3.27198 5.22692 3.61206 5 4.00002 5H20C20.388 5 20.7281 5.22692 20.8934 5.55395L12 11.7793L3.1066 5.55395ZM21 7.92066V18C21 18.5477 20.5477 19 20 19H4.00002C3.45231 19 3.00002 18.5477 3.00002 18V7.92066L11.4266 13.8192C11.7709 14.0603 12.2292 14.0603 12.5735 13.8192L21 7.92066Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </Link>
    </div>
  );
};

export default AboutMeCode;
