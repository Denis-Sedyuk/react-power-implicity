import { ReactComponent as Dot } from "../../assets/dot.svg";
import { ReactComponent as DotActive } from "../../assets/dot_active.svg";
import "./slider.scss";
export const Slider = () => {
  return (
    <div className="slider">
      <div className="slider__container">
        <h2 className="slider__title">The Power of Simplicity</h2>
        <p className="slider__description">
          Instead of spending time searching for the right app, our AI will
          bring the right app to you.
        </p>
        <button type="button" className="slider__button">
          <span className="slider__button-text">Learn</span>
        </button>
        <ul className="slider__dots">
          <li className="slider__dot">
            <Dot />
          </li>
          <li className="slider__dot">
            <Dot />
          </li>
          <li className="slider__dot slider__dot--active">
            <DotActive />
          </li>
          <li className="slider__dot">
            <Dot />
          </li>
          <li className="slider__dot">
            <Dot />
          </li>
        </ul>
      </div>
    </div>
  );
};
