"use-client";
import useHash from "@/hooks/hash";
import { usePathname, useRouter } from "next/navigation";

const menuItems = [
  {
    label: "Experience",
    path: "#Experience",
  },
  {
    label: "Projects",
    path: "#Projects",
  },
];

const Menu = ({}) => {
  const hash = useHash();

  return (
    <div className="flex flex-col gap-2 mt-8">
      {menuItems.map((item) => {
        const isActive = hash === item.path.toLowerCase();

        return (
          <div className="flex items-center gap-3" key={item.path}>
            <div
              className={`rounded-xl  h-[2px] transition-all ${
                isActive ? "bg-white w-5" : "bg-zinc-400 w-2"
              } `}
            />
            <a
              href={item.path}
              className={` flex-1 ${
                isActive ? "text-white" : "text-zinc-400"
              } :hover:text-white`}
            >
              {item.label}
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
