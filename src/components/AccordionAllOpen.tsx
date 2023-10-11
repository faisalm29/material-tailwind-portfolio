import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

type AccordionAllOpenProps = {
  label: string;
  description: string;
};

const AccordionAllOpen = ({
  label,
  description,
}: AccordionAllOpenProps): JSX.Element => {
  const [openAcc, setOpenAcc] = useState(false);

  const handleOpenAcc = () => setOpenAcc((current) => !current);

  return (
    <Accordion
      open={openAcc}
      className="mb-2 rounded-lg border border-blue-gray-100 px-4 md:mb-0"
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
  );
};

export default AccordionAllOpen;
