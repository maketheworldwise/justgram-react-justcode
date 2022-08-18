import "./Header.scss";

import Logo from "../logo/Logo";
import HeaderSearch from "./HeaderSearch";
import HeaderFeatures from "./HeaderFeatures";

function Header() {
  return (
    <header className="header">
      <Logo />
      <HeaderSearch />
      <HeaderFeatures />
    </header>
  );
}

export default Header;
