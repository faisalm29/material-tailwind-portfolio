import AccordionAllOpen from "./AccordionAllOpen";

type Detail = {
  label: string;
  description: string;
};

const Details = (): JSX.Element => {
  return (
    <div className="mb-6 md:flex md:items-start md:justify-center md:gap-4">
      {/* {details.map((detail, id) => (
        <AccordionAllOpen
          key={id}
          label={detail.label}
          description={detail.description}
        />
      ))} */}
    </div>
  );
};

export default Details;
