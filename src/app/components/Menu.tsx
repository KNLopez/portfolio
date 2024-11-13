"use-client";
import useHash from "@/hooks/hash";

const menuItems = [
  {
    label: "Projects",
    path: "#featured-projects",
  },
  {
    label: "Experience",
    path: "#experience",
  },
];

const Menu = ({}) => {
  const hash = useHash();
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(path);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => (window.location.hash = path), 500);
    }
  };

  return (
    <div className="flex flex-col gap-2 mt-8">
      {menuItems.map((item) => {
        const isActive = hash === item.path;

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
              onClick={(e) => {
                handleClick(e, item.path);
              }}
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
