import s from "../../../StyleBox.module.scss";
export const data1 = (
  <code className={s.code}>
    &lt;<span className={s.codeTagBlue}>имя_тега</span>&gt;...&lt;/
    <span className={s.codeTagBlue}>имя_тега</span>&gt;
  </code>
);

export const data2 = (
  <code className={s.code}>
    &lt;<span className={s.codeTagBlue}>section</span>&gt;Секция&lt;/
    <span className={s.codeTagBlue}>section</span>&gt;
    <br />
    <br />
    &lt;<span className={s.codeTagBlue}>p</span>&gt;Абзац&lt;/
    <span className={s.codeTagBlue}>p</span>&gt;
    <br />
    <br />
    &lt;<span className={s.codeTagBlue}>a</span>&gt;Ссылка&lt;/
    <span className={s.codeTagBlue}>a</span>&gt;
    <br />
    <br />
    &lt;<span className={s.codeTagBlue}>button</span>&gt;Кнопка&lt;/
    <span className={s.codeTagBlue}>button</span>&gt;
    <br />
    <br />
  </code>
);

export const data3 = (
  <code className={s.code}>
    <span className={s.codeText}>
      &lt;!-- Это комментарий, его содержимое не отобразится на странице--&gt;
    </span>
    <br />
    <br />
    &lt;<span className={s.codeTagBlue}>p</span>&gt;Это абзац текста, он будет
    на странице.&lt;/<span className={s.codeTagBlue}>p</span>&gt;
    <br />
    <br />
    <span className={s.codeText}>
      &lt;!--Комментарий может быть многострочным.
      <br />
      <br />
      Это удобно для более ёмких описаний.--&gt;
    </span>
    <br />
  </code>
);
export const data4 = (
  <code className={s.code}>
    &lt;<span className={s.codeTagBlue}>a</span>{" "}
    <span className={s.codeTagYelow}>href</span>="
    <span className={s.codeTagPink}>http://google.com</span>"{" "}
    <span className={s.codeTagYelow}>class</span>="
    <span className={s.codeTagPink}>link</span>"&gt;...&lt;/
    <span className={s.codeTagBlue}>a</span>&gt;
    <br />
    <br />
    &lt;<span className={s.codeTagBlue}>img</span>{" "}
    <span className={s.codeTagYelow}>src</span>="
    <span className={s.codeTagPink}>cat.jpg</span>"{" "}
    <span className={s.codeTagYelow}>alt</span>="
    <span className={s.codeTagPink}>cute cat</span>" /&gt;
    <br />
    <br />
    &lt;<span className={s.codeTagBlue}>input</span>{" "}
    <span className={s.codeTagYelow}>type</span>="
    <span className={s.codeTagPink}>text</span>"{" "}
    <span className={s.codeTagYelow}>name</span>="
    <span className={s.codeTagPink}>user_name</span>" /&gt;
    <br />
    <br />
    &lt;<span className={s.codeTagBlue}>button</span>{" "}
    <span className={s.codeTagYelow}>type</span>="
    <span className={s.codeTagPink}>submit</span>" &gt;...&lt;/
    <span className={s.codeTagBlue}>button</span>&gt;
    <br />
    <br />
    &lt;<span className={s.codeTagBlue}>p</span>{" "}
    <span className={s.codeTagYelow}>class</span>="
    <span className={s.codeTagPink}>text</span>" &gt;...&lt;/
    <span className={s.codeTagBlue}>p</span>&gt;
    <br />
  </code>
);
export const data5 = (
  <code className={s.code}>
    &lt;<span className={s.codeTagBlue}>a</span>{" "}
    <span className={s.codeTagYelow}>href</span>="
    <span className={s.codeTagPink}>http://google.com</span>"{" "}
    <span className={s.codeTagYelow}>target</span>="
    <span className={s.codeTagPink}>_blank</span>"{" "}
    <span className={s.codeTagYelow}>title</span>="
    <span className={s.codeTagPink}>Поисковая система Google</span>"&gt;
    <br />
    &nbsp; Google.com <br />
    &lt;/
    <span className={s.codeTagBlue}>a</span>&gt;
    <br />
  </code>
);
export const data6 = (
  <code className={s.code}>
    &lt;<span className={s.codeTagBlue}>img</span>
    <br />
    &nbsp; <span className={s.codeTagYelow}>src</span>="
    <span className={s.codeTagPink}>https://picsum.photos/640/480</span>"<br />
    &nbsp; <span className={s.codeTagYelow}>alt</span>="
    <span className={s.codeTagPink}>Произвольная картинка от генератора</span>"
    <br />
    /&gt;
    <br />
  </code>
);
export const data7 = (
  <code className={s.code}>
    <span className={s.codeText}>
      &lt;!-- Статъя с заголовком и абзацем --&gt;
    </span>
    <br />
    &lt;<span className={s.codeTagBlue}>article</span>&gt;
    <br />
    &nbsp; &lt;<span className={s.codeTagBlue}>h1</span>&gt;Абзац&lt;/
    <span className={s.codeTagBlue}>h1</span>&gt;
    <br />
    &nbsp; &lt;<span className={s.codeTagBlue}>p</span>&gt;
    <br />
    &nbsp; &nbsp; Большинство тегов парные. Их контент заключён между
    открывающим и<br />
    &nbsp; &nbsp; закрывающим тегом.
    <br />
    &nbsp; &lt;/
    <span className={s.codeTagBlue}>p</span>&gt;
    <br />
    &lt;/<span className={s.codeTagBlue}>article</span>&gt;
    <br />
  </code>
);
export const data8 = (
  <code className={s.code}>
    <span className={s.codeText}>
      &lt;!-- Метаинформация о кодировке --&gt;
    </span>
    <br />
    &lt;<span className={s.codeTagBlue}>meta</span>{" "}
    <span className={s.codeTagYelow}>charset</span>="
    <span className={s.codeTagPink}>utf-8</span>" / &gt;
    <br />
    <br />
    <span className={s.codeText}>&lt;!-- Поле ввода --&gt;</span>
    <br />
    &lt;<span className={s.codeTagBlue}>input</span>{" "}
    <span className={s.codeTagYelow}>type</span>="
    <span className={s.codeTagPink}>text</span>" / &gt;
    <br />
    <br />
    <br />
    <span className={s.codeText}>&lt;!-- Изображение --&gt;</span>
    <br />
    &lt;<span className={s.codeTagBlue}>img</span>{" "}
    <span className={s.codeTagYelow}>src</span>="
    <span className={s.codeTagPink}>cat.jpg</span>"{" "}
    <span className={s.codeTagYelow}>alt</span>="
    <span className={s.codeTagPink}>cool cat</span>" / &gt;
    <br />
  </code>
);
export const data9 = (
  <code className={s.code}>
    &lt;<span className={s.codeTagBlue}>тег1</span>&gt;
    <br />
    &nbsp; &lt;<span className={s.codeTagBlue}>тег2</span>&gt;
    <br />
    &nbsp; &nbsp; &lt;<span className={s.codeTagBlue}>тег3</span>&gt; ... &lt;/
    <span className={s.codeTagBlue}>тег3</span>&gt;
    <br />
    &nbsp; &nbsp; &lt;<span className={s.codeTagBlue}>тег4</span>&gt; ... &lt;/
    <span className={s.codeTagBlue}>тег4</span>&gt;
    <br />
    &nbsp; &lt;/<span className={s.codeTagBlue}>тег2</span>&gt;
    <br />
    &nbsp; &lt;<span className={s.codeTagBlue}>тег5</span>&gt;
    <br />
    &nbsp; &nbsp; &lt;<span className={s.codeTagBlue}>тег6</span>&gt; ... &lt;/
    <span className={s.codeTagBlue}>тег6</span>&gt;
    <br />
    &nbsp; &lt;/<span className={s.codeTagBlue}>тег5</span>&gt;
    <br />
    &lt;/<span className={s.codeTagBlue}>тег1</span>&gt;
  </code>
);

export const data10 = (
  <code>
    &lt;<span className={s.codeTagBlue}>p</span>&gt; <br />
    &nbsp;&nbsp;&lt;<span className={s.codeTagBlue}>a</span>{" "}
    <span className={s.codeTagYelow}>href</span>="
    <span className={s.codeTagPink}>squoosh.app</span>"&gt;Squoosh&lt;/
    <span className={s.codeTagBlue}>a</span>&gt; - сервис &lt;
    <span className={s.codeTagBlue}>em</span>&gt; оптимизации&lt;/
    <span className={s.codeTagBlue}>em</span>&gt; изображений.
    <br />
    &lt;/<span className={s.codeTagBlue}>p</span>&gt;
    <br />
    <br />
    <br />
    &lt;<span className={s.codeTagBlue}>p</span>&gt; Преимущества &lt;/
    <span className={s.codeTagBlue}>p</span>&gt;
    <br />
    &lt;<span className={s.codeTagBlue}>ul</span>&gt;
    <br />
    &nbsp;&nbsp; &lt;<span className={s.codeTagBlue}>li</span>&gt; Работает в
    браузере &lt;/<span className={s.codeTagBlue}>li</span>&gt;
    <br />
    &nbsp;&nbsp; &lt;<span className={s.codeTagBlue}>li</span>&gt; Не грузит
    систему &lt;/<span className={s.codeTagBlue}>li</span>&gt;
    <br />
    &nbsp;&nbsp; &lt;<span className={s.codeTagBlue}>li</span>&gt; Удобный
    интерфейс &lt;/<span className={s.codeTagBlue}>li</span>&gt;
    <br />
    &lt;/<span className={s.codeTagBlue}>ul</span>&gt;
  </code>
);
export const data11 = (
  <code>
    <span className={s.codeText}>
      &lt;!-- Не соблюдается порядок закрытия тегов --&gt;
    </span>
    <br />
    <div className={s.bgText}>
      &lt;<span className={s.codeTagBlue}>p</span>&gt;&lt;
      <span className={s.codeTagBlue}>a</span> 
      <span className={s.codeTagYelow}>&nbsp;href</span>="
      <span className={s.codeTagPink}>squoosh.app</span>"&gt;Squoosh&lt;/
      <span className={s.codeTagBlue}>a</span>&gt; - сервис &lt;
      <span className={s.codeTagBlue}>em</span>&gt;&lt;/
      <span className={s.codeTagBlue}>а</span>&gt; оптимизации&lt;/
      <span className={s.codeTagBlue}>p</span>&gt; изображений.&lt;/
      <span className={s.codeTagBlue}>em</span>&gt;
    </div>
    <br />
    <br />
    &lt;<span className={s.codeTagBlue}>ul</span>&gt; &nbsp;&nbsp;
    <div className={s.bgText}>
      &lt;<span className={s.codeTagBlue}>p</span>&gt; Преимущества &lt;/
      <span className={s.codeTagBlue}>p</span>&gt;
    </div>
    &nbsp;&nbsp; &lt;<span className={s.codeTagBlue}>li</span>&gt; Работает в
    браузере &lt;/<span className={s.codeTagBlue}>li</span>&gt;
    <br />
    &nbsp;&nbsp; &lt;<span className={s.codeTagBlue}>li</span>&gt; Не грузит
    систему &lt;/<span className={s.codeTagBlue}>li</span>&gt;
    <br />
    &nbsp;&nbsp; &lt;<span className={s.codeTagBlue}>li</span>&gt; Удобный
    интерфейс &lt;/<span className={s.codeTagBlue}>li</span>&gt;
    <br />
    &lt;/<span className={s.codeTagBlue}>ul</span>&gt;
  </code>
);
