import "./Header.scss";
import { ReactComponent as WorkItLightLogo } from "../../assets/svg/logo-light.svg";

export function Header() {
  return (
    <div className="header">
      <WorkItLightLogo />
      <span className="header__apply-for-access">Apply for access</span>
    </div>
  );
}
