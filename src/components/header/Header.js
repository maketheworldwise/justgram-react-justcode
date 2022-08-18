import "./Header.scss";

import Logo from "../logo/Logo";
import HeaderSearch from "./HeaderSearch";
import HeaderMenu from "./HeaderMenu";

function Header() {
  return (
    <header className="main-header">
      <Logo />
      <HeaderSearch />
      <HeaderMenu />
    </header>
  );
}

export default Header;
