"use client";
import { useEffect, useState } from "react";
import Experience from "./components/Experience";
import Menu from "./components/Menu";
import Project from "./components/Project";
import Section from "./components/Section";
import { experience, projects } from "./data";

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
      cursorBG.style.opacity = 0.3;
      cursorBG.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    });
  }, []);

  return (
    <>
      <div className="cursor-background fixed z-0" />
      <main className="flex min-h-screen flex-col justify-between lg:p-24 p-8 container gap-8 lg:flex-row lg:gap-24">
        <div className="background-container fixed inset-0 z-10" />
        <div className="flex flex-1 flex-col gap-2 w-full z-20 relative">
          <div className="sticky top-36 lg:p-6 rounded">
            <h1 className="text-6xl font-bold mb-2">Kurt Lopez</h1>
            <p className="text-lg mb-4 uppercase font-bold tracking-wider ">
              Senior Frontend Engineer
            </p>
            <p className="text-gray-300 text-sm mb-2">
              I&apos;m a Senior Frontend Engineer from the Philippines with over
              9 years of experience.
            </p>
            <p className="text-gray-300 text-sm">
              I love optimizing applications for performance and
              maintainability. I&apos;m also a fan of React, TypeScript, and
              ThreeJS.
            </p>
            <div className="mt-4 text-sm grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-4 tracking-wide">
              <span className="flex items-center">
                <span className="mr-1">Email:</span>
                <a
                  target="_blank"
                  href="mailto:kurtdevph@gmail.com"
                  className="text-zinc-200 hover:text-white underline font-semibold"
                >
                  kurtdevph@gmail.com
                </a>
              </span>
              <span className="flex items-center">
                <span className="mr-1">Phone:</span>
                <a
                  target="_blank"
                  href="tel:+6591733474"
                  className="text-zinc-200 hover:text-white underline font-semibold"
                >
                  +6591733474
                </a>
              </span>
              <span className="flex items-center">
                <span className="mr-1">Behance:</span>
                <a
                  target="_blank"
                  href="https://www.behance.net/kurtdevph"
                  className="text-zinc-200 hover:text-white underline font-semibold"
                >
                  behance.net/kurtdevph
                </a>
              </span>
              <span className="flex items-center">
                <span className="mr-1">Codepen:</span>
                <a
                  target="_blank"
                  href="https://codepen.io/kurtlopez"
                  className="text-zinc-200 hover:text-white underline font-semibold"
                >
                  codepen.io/kurtlopez
                </a>
              </span>
            </div>
            <Menu />
          </div>
        </div>
        <div className="flex flex-col gap-2 flex-1 z-20 relative">
          <Section
            title={"featured-projects"}
            data={projects}
            Child={Project}
            selected={selected}
            setSelected={setSelected}
            identifier={"title"}
          />
          <Section
            title={"experience"}
            data={experience}
            Child={Experience}
            selected={selected}
            setSelected={setSelected}
            identifier={"company"}
          />
        </div>
      </main>
    </>
  );
}
