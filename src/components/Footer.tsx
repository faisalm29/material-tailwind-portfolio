import siteConfig from "@/config/site";
import { Typography } from "@material-tailwind/react";
import { LinkedIn, Mail } from "./Icon";

const currentYear = new Date().getFullYear();

const Footer = (): JSX.Element => {
  return (
    <footer className="relative w-full border-t border-blue-gray-50">
      <div className="mx-auto w-full max-w-[960px] px-4">
        <div className="flex w-full flex-col items-center justify-center py-4 md:flex-row md:justify-between">
          <div>
            <Typography
              variant="small"
              className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0 md:text-left"
            >
              Created with 🤍 using{" "}
              <a
                href="https://nextjs.org"
                target="_blank"
                className="underline transition-colors duration-300 ease-in-out hover:text-blue-500"
              >
                next
              </a>
              ,{" "}
              <a
                href="https://contentlayer.dev"
                target="_blank"
                className="underline transition-colors duration-300 ease-in-out hover:text-blue-500"
              >
                contentlayer
              </a>
              ,{" "}
              <a
                href="https://www.material-tailwind.com/"
                target="_blank"
                className="underline transition-colors duration-300 ease-in-out hover:text-blue-500"
              >
                material tailwind
              </a>
              , and deployed by{" "}
              <a
                href="https://vercel.com"
                target="_blank"
                className="underline transition-colors duration-300 ease-in-out hover:text-blue-500"
              >
                vercel
              </a>
              .
            </Typography>
            <Typography
              variant="small"
              className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0 md:text-left"
            >
              &copy; {currentYear} Faisal Muhammad. All Rights Reserved.
            </Typography>
          </div>
          <div className="flex items-center justify-center gap-4 text-blue-gray-900 sm:justify-center">
            <Typography as="a" href={`mailto:${siteConfig.contacts.email}`}>
              <Mail />
            </Typography>
            <Typography
              as="a"
              href={`https://www.linkedin.com/in/${siteConfig.contacts.linkedin}`}
              target="_blank"
            >
              <LinkedIn />
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
