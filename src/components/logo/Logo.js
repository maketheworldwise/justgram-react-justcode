import "./Logo.scss";

import LogoImage from "./LogoImage";
import LogoText from "./LogoText";

function Logo() {
  return (
    <div className="logo">
      <LogoImage />
      <span className="separator">|</span>
      <LogoText />
    </div>
  );
}

export default Logo;
