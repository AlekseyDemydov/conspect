import { Outlet } from "react-router-dom";
import s from "./Layout.module.scss";

import { StyledNavLink } from "../Less/StyleLink";
import { useTheme } from "./useTheme";

const Less = [
  { href: "html", name: "HTML" },
  { href: "js", name: "Js" },
  { href: "react", name: "ReactJs" },
  { href: "node", name: "NodeJs" },
];

const Layout = () => {
  const { theme, setTheme } = useTheme();
  const handleLightThemeClick = () => {
    setTheme("light");
    console.log(theme);
  };
  const handleDarkThemeClick = () => {
    setTheme("dark");
  };
  return (
    <>
      <div className={s.container}>
        <div className={s.contBtn}>
          <button onClick={handleLightThemeClick} className={s.bthTheme}>
            light theme
          </button>
          <button onClick={handleDarkThemeClick} className={s.bthTheme}>
            dark theme
          </button>
        </div>
        <div className={s.item}>
          {Less.map(({ href, name }) => (
            <StyledNavLink to={href} key={href} className={s.navL}>
              {name}
            </StyledNavLink>
          ))}
        </div>
        <div className={s.info}>
          <Outlet className={s.itemInfo} />
        </div>
      </div>
    </>
  );
};
export default Layout;
