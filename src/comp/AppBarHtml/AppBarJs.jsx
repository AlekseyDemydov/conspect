import { Outlet } from "react-router-dom";
import { Js } from "../Less/Js";


import s from "./StyleBar.module.scss";

export const AppBarJs = () => {
  return (
    <div className={s.nav}>
      <div className={s.sizeBar}>
       <Js/>
      </div>
     
      <div className="info">
        <Outlet />
      </div>
    </div>
  );
};
