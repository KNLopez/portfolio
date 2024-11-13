import Box from "./Box";

type ProjectProps = {
  title: string;
  selected: string;
  link: string;
  description: string;
  image: string;
  video: string;
};

const Project = ({
  title,
  selected,
  link,
  description,
  image,
  video,
}: ProjectProps) => {
  return (
    <Box id={title} selected={selected}>
      <div className="rounded-md overflow-hidden">
        {video && (
          <video
            src={video}
            autoPlay
            muted
            loop
            className="w-full h-64 object-cover"
          />
        )}
        {image && (
          <img
            src={image}
            alt="placeholder"
            className="w-full h-64 object-cover"
          />
        )}

        <div className="p-6 w-full">
          <p className="text-2xl font-bold">{title}</p>
          <p className="text-zinc-400 mb-4 break-words">{description}</p>
          <a
            target="_blank"
            href={link}
            className=" bg-zinc-700
              text-zinc-400
              px-2
              py-2
              w-full
              block
              text-center
              rounded
              
              hover:bg-zinc-600
              hover:text-white"
          >
            View
          </a>
        </div>
      </div>
    </Box>
  );
};

export default Project;
