import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useClipboard } from "use-clipboard-copy";
import s from "./StylesUtils.module.scss";

export function CopyText({ inpText }) {
  const clipboard = useClipboard();
  const notify = () =>
    toast.success("Copied", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  let value = Object.entries(inpText);

  let obj = value.map(([index, item]) => {
    return item;
  });

  let item = value.map(([index, item]) => {
    return <p key={index}>{item}</p>;
  });
  return (
    <div className={s.copyBox}>
      <input ref={clipboard.target} disabled value={obj} className={s.inp} />
      <div>{item}</div>
      <button
        onClick={() => {
          notify();
          clipboard.copy();
        }}
        className={s.btnCopy}
      >
        Copy
      </button>

      <ToastContainer />
    </div>
  );
}
