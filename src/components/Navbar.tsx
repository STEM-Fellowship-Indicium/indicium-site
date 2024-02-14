import Image from "next/image";

export default function Navbar(): JSX.Element {
  return (
    <div className="flex gap-10 text-center fixed w-screen flex-row items-center justify-between p-7 z-50">
      <Image
        src="/images/stemfellowship-logo.png"
        alt="Indicium Logo"
        width={150}
        height={150}
      />

      <div className="flex flex-row justify-center items-center gap-4">
        <a
          href="https://github.com/STEM-Fellowship-Indicium"
          className="text-slate-400 rounded-lg duration-300 ease-in-out cursor-pointer px-7 py-4 hover:bg-slate-100"
        >
          GitHub
        </a>
        <a
          href="https://discord.gg/QPsvnrHXSC"
          className="text-slate-400 rounded-lg duration-300 ease-in-out cursor-pointer px-7 py-4 hover:bg-slate-100"
        >
          Discord
        </a>
        <a
          href="https://en.wikipedia.org/wiki/Travelling_salesman_problem"
          className="text-slate-400 rounded-lg duration-300 ease-in-out cursor-pointer px-7 py-4 hover:bg-slate-100"
        >
          What is TSP?
        </a>
        <a
          href="https://www.uoguelph.ca"
          className="text-slate-400 rounded-lg duration-300 ease-in-out cursor-pointer px-7 py-4 hover:bg-slate-100"
        >
          The University of Guelph
        </a>
        <a
          href="https://www.stemfellowship.org/about/"
          className="rounded-lg mx-3 hover:bg-slate-100 hover:text-slate-900 bg-slate-900 px-7 py-4 text-sm font-normal text-white duration-300 ease-in-out"
        >
          About STEM Fellowship
        </a>
      </div>
    </div>
  );
}
