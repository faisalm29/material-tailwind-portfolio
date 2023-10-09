import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

type AccordionProps = {
  label: string;
  description: string;
};

const AccordionAllOpen = ({
  label,
  description,
}: AccordionProps): JSX.Element => {
  const [openAcc, setOpenAcc] = React.useState(false);

  const handleOpenAcc = () => setOpenAcc((cur) => !cur);

  return (
    <>
      <Accordion
        open={openAcc}
        className="rounded-lg border border-blue-gray-100 px-4 mb-2 md:mb-0"
      >
        <AccordionHeader
          onClick={handleOpenAcc}
          className={`border-b-0 transition-colors ${
            openAcc ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
          {label}
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          {description}
        </AccordionBody>
      </Accordion>
    </>
  );
};

export default AccordionAllOpen;
