import AccordionAllOpen from "./Accordion";

type Detail = {
  label: string;
  description: string;
};

const Details = ({ details }: { details: Detail[] }): JSX.Element => {
  return (
    <div className="md:flex md:justify-center md:items-start md:gap-4 mb-6">
      {details.map((detail, id) => (
        <AccordionAllOpen
          key={id}
          label={detail.label}
          description={detail.description}
        />
      ))}
    </div>
  );
};

export default Details;
