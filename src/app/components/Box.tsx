type BoxProps = {
  children: React.ReactNode;
  id: string;
  selected: string;
};

const Box = ({ children, id, selected }: BoxProps) => {
  return (
    <div
      className={`
       bg-zinc-800
       rounded
       transition-all
       
       lg:hover:scale-110
       lg:${selected === id || selected === "" ? "opacity-100" : "opacity-50"}
    `}
    >
      {children}
    </div>
  );
};

export default Box;
