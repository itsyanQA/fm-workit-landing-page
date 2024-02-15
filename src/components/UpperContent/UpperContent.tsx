import "./UpperContent.scss";
import { Button } from "../Button/Button";

export function UpperContent() {
  return (
    <div className="upper-content">
      <div className="upper-content__title-and-button">
        <h1 className="upper-content__title">
          Data <span className="upper-content__tailored">tailored</span> to your needs
        </h1>

        <Button>Learn more</Button>
      </div>
      <img className="upper-content__phone" src={require("../../assets/img/image-hero.webp")} />
    </div>
  );
}
