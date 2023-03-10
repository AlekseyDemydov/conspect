import s from "../../StyleBox.module.scss";
export const JsUr3 = () => {
  return (
    <>
      <div className={s.boxInfo}>
        <h2>Инструменты разработчика</h2>
        <p>
          При написании кода всегда будут оповещения и ошибки, это нормально.
          Консоль браузера показывает информацию связанную с веб-страницей, в
          том числе сообщения об ошибках и предупреждения исполнения JS-кода,
          запущенного в контексте страницы.
        </p>
        <p>
          Следующие комбинации клавиш открывают инструменты разработчика на
          вкладке Console:
        </p>
        <ul>
          <li>Windows и Linux - Ctrl + Shift + J или F12</li>
          <li>MacOS - Command + Option + J</li>
        </ul>
      </div>
    </>
  );
};
