import Box from "./Box";

type ProjectProps = {
  title: string;
  selected: string;
  link: string;
  description: string;
};

const Project = ({ title, selected, link, description }: ProjectProps) => {
  return (
    <Box id={title} selected={selected}>
      <div className="p-6">
        <h3 className="text-sm uppercase font-semibold tracking-wider mb-2">
          {title}
        </h3>
        <p className="text-2xl font-bold">{title}</p>
        <p className="text-zinc-400 mb-4">{description}</p>
        <a
          target="_blank"
          href={link}
          className=" bg-zinc-700
              text-zinc-400
              px-2
              py-1
              rounded
              
              hover:bg-zinc-600
              hover:text-white"
        >
          View
        </a>
      </div>
    </Box>
  );
};

export default Project;
