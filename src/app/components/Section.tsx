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
  const isScrolling = useRef(false);
  const handleScroll = () => {
    isScrolling.current = true;
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    //  hanhdle mobile wheel
    window.addEventListener("touchmove", handleScroll);

    const observer = new IntersectionObserver(([entry]) => {
      if (
        entry.boundingClientRect &&
        entry.boundingClientRect.top < 100 &&
        isScrolling.current
      ) {
        location.hash = title;
        isScrolling.current = false;
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      window.removeEventListener("wheel", handleScroll);
      observer.disconnect();
    };
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
