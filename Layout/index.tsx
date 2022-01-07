import { useContext, useEffect, useState } from "react";
import { NavBar } from "../components";
import { SideElements } from "../components";
import { GlobalContext } from "../context/Globalcontext";
import { Wrapper } from "./LayoutStyles";

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { width }: any = useContext(GlobalContext);

  return (
    <Wrapper>
      <NavBar />
      {width ? <SideElements /> : null}
      {children}
    </Wrapper>
  );
};

export default Layout;
