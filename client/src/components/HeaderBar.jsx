import { Outlet } from "react-router";
import MobileNav from "./MobileNav";
import NavBar from "./NavBar";
import FooterBar from "./FooterBar";

function HeaderBar() {
  return (
    <div className="h-auto w-full bg-[#0C0C0C] flex flex-col">
      <NavBar />
      <Outlet />
      <FooterBar />
      <MobileNav />
    </div>
  );
}

export default HeaderBar;
