import React, { ReactNode } from "react";
import Header from "./header";
import SideBar from "./sideBar";

export interface layoutProp {
  children: ReactNode;
}

const Layout = ({ children }: layoutProp) => {
  return (
    <div className="flex min-h-screen">
      <SideBar />
      <div className="md:ml-[240px] ml-[60px] flex-1 px-5 md:px-14 bg-primary">
        <Header />
        <div className="mt-[70px]">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
