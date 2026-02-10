import { AuthApi } from "@/api/auth/AuthApi";
import { useAuthStore } from "@/store/AuthStore";
import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const TopBarNavigation = () => {
  const [isKlik, setIsKlik] = useState(false);
  const router = useRouter();

  const profileData = useAuthStore((state) => state.profileData);
  const fetchProfile = useAuthStore((state) => state.fetchProfile);
  const errorFetchProfile = useAuthStore((state) => state.error);
  const pathName = usePathname();
  const adminPath = pathName?.startsWith("/admin");
  const userPath = pathName?.startsWith("/users");

  useEffect(() => {
    fetchProfile();
  }, []);

  useEffect(() => {
    if (errorFetchProfile === "unauthorized" && userPath) {
      router.push("/auth/login");
    } else if (errorFetchProfile === "unauthorized" && adminPath) {
      router.push("/auth/admin/login");
    }
  }, [errorFetchProfile]);

  useEffect(() => {
    const checkAccess = () => {
      if (!profileData) return;
      if (profileData.role === "admin" && userPath) {
        router.push("/admin/home");
      }
      if (profileData.role === "user" && adminPath) {
        router.push("/users/home");
      }
    };

    checkAccess();
  }, [profileData, adminPath, userPath]);

  const handleToggle = () => {
    setIsKlik((s) => !s);
  };

  const handleLogout = async () => {
    try {
      const currentRole = profileData?.role;

      await AuthApi.authLogout();
      if (currentRole === "admin") {
        router.push("/auth/admin/login");
      }
      if (currentRole === "user") {
        router.push("/auth/login");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="flex justify-center my-5">
      <div className="bg-white text-black w-[65em] h-12 shadow-xl rounded-xl flex items-center justify-between px-6">
        <h1 className="font-semibold">Hello {profileData?.name},</h1>
        <div className="flex items-center gap-4 ">
          <div className="flex items-center gap-1  border-2 border-gray-300 rounded-xl w-[10em] py-1   ">
            <FontAwesomeIcon icon={faSearch} className="text-gray-700 pl-2" />
            <h1 className="text-sm text-gray-700">Search</h1>
          </div>
          <div className="relative">
            <div
              className="border-gray-300 border-2 w-8 h-8 flex justify-center items-center rounded-full cursor-pointer"
              onClick={handleToggle}
            >
              <FontAwesomeIcon
                icon={faUser}
                className="text-gray-700 text-xs"
              />
            </div>
            {isKlik && (
              <div className="absolute bg-white w-[15em] mt-4 right-0 shadow-lg rounded-lg flex  flex-col gap-2 ">
                <p className="p-2 cursor-pointer ">{profileData?.name}</p>
                <p className="p-2 cursor-pointer">{profileData?.email}</p>
                <p className="p-2 cursor-pointer">{profileData?.role}</p>
                <p
                  className="p-2 cursor-pointer text-red-600"
                  onClick={handleLogout}
                >
                  Logout
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBarNavigation;
