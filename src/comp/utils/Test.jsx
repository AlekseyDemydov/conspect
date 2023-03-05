import s from "./StylesUtils.module.scss";
export const Copy = ({ text }) => {
 

    
  
  return (
    <>
      <div className={s.copyBox}>{text}</div>
  
    </>
  );
};
