import { NavBar } from "../components";
import SideElements from "../components/SideElements";
import { Wrapper } from "./LayoutStyles";

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Wrapper>
      <NavBar />
      <SideElements />
      {children}
    </Wrapper>
  );
};

export default Layout;