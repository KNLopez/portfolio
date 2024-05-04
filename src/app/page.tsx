"use client";
import { useEffect, useState } from "react";
import Experience from "./components/Experience";
import { experience, projects } from "./data";
import Menu from "./components/Menu";
import Section from "./components/Section";
import Project from "./components/Project";

export default function Home() {
  const [selected, setSelected] = useState("");

  useEffect(() => {
    // follow cursor with .cursor-background
    const cursorBG: any = document.querySelector(".cursor-background");

    const cursorBGSize = cursorBG.getBoundingClientRect();
    const halfWidth = cursorBGSize.width / 2;
    const halfHeight = cursorBGSize.height / 2;

    if (!cursorBG) return;
    document.addEventListener("mousemove", (e) => {
      const mouseY = e.clientY - halfHeight;
      const mouseX = e.clientX - halfWidth;
      cursorBG.style.opacity = 0.2;
      cursorBG.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    });
  }, []);

  return (
    <>
      <div className="cursor-background fixed z-0" />
      <main className="flex min-h-screen flex-col justify-between lg:p-36 p-8 container gap-8 lg:flex-row lg:gap-36">
        <div className="background-container fixed inset-0 z-10" />
        <div className="flex flex-1 flex-col gap-2 w-full z-20 relative">
          <div className="sticky top-36 lg:bg-[rgb(25,25,25)] lg:p-20 rounded">
            <h1 className="text-6xl font-bold mb-2">Kurt Lopez</h1>
            <p className="text-lg mb-4 uppercase font-bold tracking-wider ">
              Senior Frontend Engineer
            </p>
            <p className="text-gray-400 text-sm">
              I&apos;m a Senior Frontend Engineer from the Philippines with over
              9 years of experience in building beautiful UI. I specialize in
              React, Next.js, and Typescript.
            </p>
            <div className="mt-4 text-sm">
              <span>
                email:
                <a
                  target="_blank"
                  href="mailto:kurtdevph@gmail.com"
                  className="text-zinc-400 hover:text-white underline ml-1"
                >
                  kurtdevph@gmail.com
                </a>
              </span>
              <span className="ml-4">
                phone:
                <a
                  target="_blank"
                  href="tel:+6591733474"
                  className="text-zinc-400 hover:text-white underline ml-1"
                >
                  +6591733474
                </a>
              </span>
            </div>
            <Menu />
          </div>
        </div>
        <div className="flex flex-col gap-16 flex-1 z-20 relative">
          <Section
            title={"Experience"}
            data={experience}
            Child={Experience}
            selected={selected}
            setSelected={setSelected}
            identifier={"company"}
          />
          <Section
            title={"Projects"}
            data={projects}
            Child={Project}
            selected={selected}
            setSelected={setSelected}
            identifier={"title"}
          />
        </div>
      </main>
    </>
  );
}
