import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";
const NavigationBar = () => {
  const pathName = usePathname();

  const navItemsAdmin = [
    {
      href: "/admin/home",
      label: "Home",
    },
    {
      href: "/admin/users",
      label: "users",
    },
  ];
  const navItemsUsers = [
    {
      href: "/users/home",
      label: "Home",
    },
    {
      href: "/users/products",
      label: "Products",
    },
  ];

  const adminPath = pathName?.startsWith("/admin");
  const userPath = pathName?.startsWith("/users");

  return (
    <div className=" bg-white text-black w-[20em] shadow-lg min-h-screen rounded-tr-xl">
      <div className=" pl-4 w-full">
        <h1 className="text-2xl font-semibold  pt-4 ">
          {" "}
          Dashboard {adminPath ? "Admin" : "user"}
        </h1>
        <div className="my-10 flex flex-col gap-4">
          {adminPath ? (
            <>
              {navItemsAdmin.map((nav, i) => {
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
            </>
          ) : (
            <>
              {navItemsUsers.map((nav, i) => {
                const isActive = pathName === nav.href;

                return (
                  <Link
                    key={i}
                    href={nav.href}
                    className={`flex w-[15em] items-center justify-between px-4 py-2  ${
                      isActive ? "bg-[#38ea32] text-white" : "bg-white"
                    }  text-black rounded-2xl `}
                  >
                    <h1 className="text-xl ">{nav.label}</h1>
                    <FontAwesomeIcon icon={faChevronRight} />
                  </Link>
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
