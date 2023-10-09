import { Navbar, Collapse, Button, IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import NavList from "./NavList";
import { useState, useEffect } from "react";

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
    <Navbar className="mx-auto max-w-screen px-4 py-3 rounded-none sticky top-0 z-10 mb-16">
      <div className="max-w-[960px] mx-auto">
        <div className="text-blue-gray-900 flex items-center justify-between">
          <div className="hidden lg:block">
            <NavList />
          </div>
          <Button variant="filled" size="md">
            Contact
          </Button>
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
