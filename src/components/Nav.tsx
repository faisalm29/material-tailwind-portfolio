import { useState, useEffect } from "react";
import siteConfig from "@/config/site";
import Link from "next/link";
import { Navbar, Collapse, Button, IconButton } from "@material-tailwind/react";
import NavList from "./NavList";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Nav = (): JSX.Element => {
  const [openNav, setOpenNav] = useState(false);

  const handleWindowResize = () => {
    window.innerWidth >= 960 && setOpenNav(false);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="max-w-screen sticky top-0 z-10 mx-auto mb-16 rounded-none px-4 py-3">
      <div className="mx-auto max-w-[960px]">
        <div className="flex items-center justify-between text-blue-gray-900">
          <div className="hidden lg:block">
            <NavList />
          </div>
          <Link href="https://drive.usercontent.google.com/download?id=11c7HmmsvCJrlB654gjoVfZ7ddeMm63VA&export=download&authuser=0&confirm=t&uuid=1aa431ff-2594-4199-92dd-d507ccfa71a8&at=APZUnTVUKI2JOe2e8M4qDFsy8Q9V:1701413012096">
            <Button variant="filled" size="md">
              Download Resume
            </Button>
          </Link>

          <IconButton
            variant="text"
            ripple={false}
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
        </Collapse>
      </div>
    </Navbar>
  );
};

export default Nav;
