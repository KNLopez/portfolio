"use client";

import { useEffect, useRef } from "react";

type SectionProps = {
  title: string;
  selected: string;
  setSelected: (selected: string) => void;
  data: any;
  Child: React.ComponentType<any>;
  identifier: string;
};

const Section = ({
  title,
  selected,
  setSelected,
  data,
  Child,
  identifier,
}: SectionProps) => {
  const ref = useRef(null);

  useEffect(() => {
    let scroll = false;
    // check if on screen then change the hash

    document.addEventListener("scroll", (e) => {
      if (ref.current === null || scroll) return;
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (
            entry.boundingClientRect.top < 200 &&
            entry.boundingClientRect.top > -200
          ) {
            window.location.hash = title.toLocaleLowerCase();
          }
        });
      });

      observer.observe(ref.current);
      scroll = true;
    });
  }, [title]);

  return (
    <div>
      <h3
        className="text-3xl font-bold mb-4 pt-10 capitalize"
        id={title}
        ref={ref}
      >
        {title}
      </h3>
      <div className="flex flex-col gap-2">
        {data.map((item: any) => (
          <div
            key={item.description}
            onMouseEnter={() => {
              setSelected(item[identifier]);
            }}
            onMouseLeave={() => {
              setSelected("");
            }}
          >
            <Child {...item} selected={selected} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section;
