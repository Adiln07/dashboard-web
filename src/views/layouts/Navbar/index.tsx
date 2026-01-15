import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";
const NavigationBar = () => {
  const pathName = usePathname();

  const navItems = [
    {
      href: "/admin/home",
      label: "Home",
    },
    {
      href: "/admin/products",
      label: "products",
    },
  ];
  return (
    <div className=" bg-white text-black w-[20em] shadow-lg min-h-screen rounded-tr-xl">
      <div className=" pl-4 w-full">
        <h1 className="text-3xl font-semibold  pt-4 ">Dashboard</h1>
        <div className="my-10 flex flex-col gap-4">
          {navItems.map((nav, i) => {
            const isActive = pathName === nav.href;

            return (
              <Link
                key={i}
                href={nav.href}
                className={`flex w-[15em] items-center justify-between px-4 py-2  ${
                  isActive ? "bg-[#5932EA] text-white" : "bg-white"
                }  text-black rounded-2xl `}
              >
                <h1 className="text-xl ">{nav.label}</h1>
                <FontAwesomeIcon icon={faChevronRight} />
              </Link>
            );
          })}
          <Link
            href=""
            className={`flex w-[15em] items-center justify-between px-4 py-2  text-black rounded-2xl`}
          >
            <h1 className="text-xl ">Customers</h1>
            <FontAwesomeIcon icon={faChevronRight} />
          </Link>
          <Link
            href=""
            className={`flex w-[15em] items-center justify-between px-4 py-2  text-black rounded-2xl`}
          >
            <h1 className="text-xl ">Income</h1>
            <FontAwesomeIcon icon={faChevronRight} />
          </Link>
          <Link
            href=""
            className={`flex w-[15em] items-center justify-between px-4 py-2  text-black rounded-2xl`}
          >
            <h1 className="text-xl ">Promote</h1>
            <FontAwesomeIcon icon={faChevronRight} />
          </Link>
          <Link
            href=""
            className={`flex w-[15em] items-center justify-between px-4 py-2  text-black rounded-2xl`}
          >
            <h1 className="text-xl ">Help</h1>
            <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
