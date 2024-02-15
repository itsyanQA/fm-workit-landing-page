import { Header } from "../../components/Header/Header";
import { ReactComponent as UpperContainerBg } from "../../assets/svg/upper-container-bg.svg";
import { ReactComponent as Wave1Pattern } from "../../assets/svg/bg-pattern-1.svg";
import { ReactComponent as Wave2Pattern } from "../../assets/svg/bg-pattern-2.svg";
import "./Home.scss";
import { UpperContent } from "../../components/UpperContent/UpperContent";

export function Home() {
  return (
    <div className="home">
      <div className="home__upper-container">
        <UpperContainerBg className="home__upper-container-bg" />
        <Wave1Pattern className="home__upper-container-wave-1-pattern" />
        <Wave2Pattern className="home__upper-container-wave-2-pattern" />
        <Header />
        <UpperContent />
      </div>
    </div>
  );
}
