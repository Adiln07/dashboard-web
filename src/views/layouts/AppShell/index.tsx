import React from "react";
import NavigationBar from "@/views/layouts/Navbar";
import TopBarNavigation from "../TopBar";

type AppShellProps = {
  children: React.ReactNode;
};

const AppShell = (props: AppShellProps) => {
  const { children } = props;

  return (
    <main className="flex min-h-screen">
      <NavigationBar />
      <div className="w-full h-full">
        <TopBarNavigation />
        {children}
      </div>
    </main>
  );
};

export default AppShell;
