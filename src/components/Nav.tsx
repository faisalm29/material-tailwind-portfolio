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
          <Link href="https://drive.usercontent.google.com/download?id=1rVRtU6YdI4Dwv_HdgJyuqc_wV_KULtdL&export=download&authuser=0&confirm=t&uuid=a09d75ca-1894-4aa5-9df8-5129241edcdb&at=APZUnTXNAH9BJo-LqVwiAMO-NdEn:1703679281725">
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
