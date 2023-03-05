import s from "./StylesUtils.module.scss";
import lamp from "../../img/lamp.png";
export const HealthyBox = ({ link, text, title }) => {
  return (
    <div className={s.helth}>
      <div className={s.iconBox}>
        <img src={lamp} alt="lamp" className={s.icon} />
        <h4 className={s.helthTitle}>{title}</h4>
      </div>
      <br />
      <p>
        {text}{" "}
        <a
          href={link}
          className={s.helthLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link}
        </a>
      </p>
    </div>
  );
};
