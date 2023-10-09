import { Typography } from "@material-tailwind/react";
import Link from "next/link";

const links = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Works",
    route: "/work",
  },
];

const NavList = (): JSX.Element => {
  return (
    <ul className="flex flex-col my-2 gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {links.map((link, id) => (
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
          key={id}
        >
          <Link
            href={link.route}
            className="flex items-center hover:text-blue-500 transition-colors"
          >
            {link.label}
          </Link>
        </Typography>
      ))}
    </ul>
  );
};

export default NavList;
