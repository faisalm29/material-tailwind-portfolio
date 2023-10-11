import { Typography } from "@material-tailwind/react";
import { LinkedIn, Mail } from "./Icon";

const currentYear = new Date().getFullYear();

const Footer = (): JSX.Element => {
  return (
    <footer className="relative w-full border-t border-blue-gray-50">
      <div className="mx-auto w-full max-w-[960px] px-4">
        <div className="flex w-full flex-col items-center justify-center py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; {currentYear} Faisal Muhammad. All Rights Reserved.
          </Typography>
          <div className="flex items-center justify-center gap-4 text-blue-gray-900 sm:justify-center">
            <Typography as="a" href="mailto:faisal.muhammad2911@gmail.com">
              <Mail />
            </Typography>
            <Typography as="a" href="/">
              <LinkedIn />
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
