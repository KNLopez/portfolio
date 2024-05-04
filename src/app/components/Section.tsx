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
  return (
    <div>
      <h3 className="text-3xl font-bold mb-4" id={title}>
        {title}
      </h3>
      <div className="flex flex-col gap-2">
        {data.map((item: any) => (
          <div
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
