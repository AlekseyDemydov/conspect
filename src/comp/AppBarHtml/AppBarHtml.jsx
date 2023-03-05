import { Outlet } from "react-router-dom";
import { Html } from "../Less/Html";
import { Burger } from "../utils/Burger";

import s from "./StyleBar.module.scss";

export const AppBarHtml = () => {
  return (
    <div className={s.nav}>
      <div className={s.sizeBarMenu}>
        <Burger />
      </div>
      <div className={s.sizeBar}>
        <Html />
      </div>

      <div className={s.info}>
        <Outlet />
      </div>
    </div>
  );
};
