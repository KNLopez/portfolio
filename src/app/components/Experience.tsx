import Box from "./Box";

type ExperienceProps = {
  title: string;
  company: string;
  location: string;
  date: string;
  description: string;
  selected: string;
  tech: string[];
};

const Experience = ({
  title,
  company,
  location,
  date,
  description,
  selected,
  tech,
}: ExperienceProps) => {
  return (
    <Box id={company} selected={selected}>
      <div
        className="
             p-6
        "
      >
        <h3
          className="
            text-sm
            uppercase
            font-semibold
            tracking-wider
            mb-2
            "
        >
          {title}
        </h3>
        <p
          className="
             
             text-2xl
                font-bold
            "
        >
          {company}
        </p>
        <p
          className="
             text-zinc-400
             mb-4
            "
        >
          {location}
        </p>
        <p
          className="
             text-zinc-400
             mb-4
            "
        >
          {date}
        </p>
        <p
          className={`
            ${selected === company ? "text-white" : "text-zinc-400"}
            `}
          dangerouslySetInnerHTML={{
            __html: description.replace(/\*([^*]+)\*/g, "<b>$1</b>"),
          }}
        ></p>
        <ul
          className="
            flex
            gap-2
            mt-4
            "
        >
          {tech.map((t) => (
            <li
              className="
                bg-zinc-700
                text-zinc-400
                px-2
                py-1
                rounded
                text-xs
                hover:bg-zinc-600
                hover:text-white
                "
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </Box>
  );
};

export default Experience;
