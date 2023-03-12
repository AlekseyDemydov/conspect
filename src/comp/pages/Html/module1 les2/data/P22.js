import s from "../../../StyleBox.module.scss";
export const data1 = (
  <code className={s.code}>
    &lt;<span className={s.codeTagBlue}>p</span>&gt;
    <br/>
    &nbsp;&nbsp;
    Тег &lt;<span className={s.codeTagBlue}>span</span> <span className={s.codeTagYelow}>class</span>="<span className={s.codeTagPink}>accent</span>"&gt;span&lt;/<span className={s.codeTagBlue}>span</span>&gt; это универсальный контейнер для мелкого
    <br/>
    &nbsp;&nbsp;
    текстового контента.
    <br/>
    &lt;/<span className={s.codeTagBlue}>p</span>&gt;
  </code>
);
export const data2 = (
  <>
  Спану с атрибутом <span className={s.tag}>class="accent"</span> при помощи CSS можно будет добавить стили, например другой цвет текста, его размер и т. п.
  </>
);
export const data3 = (
  <code className={s.code}>
    &lt;<span className={s.codeTagBlue}>p</span>&gt;
    <br/>
    &nbsp;&nbsp;
    Последние новости на &lt;<span className={s.codeTagBlue}>time </span> <span className={s.codeTagYelow}>datetime</span>="<span className={s.codeTagPink}>2019-12-14</span>"&gt;14 декабря 2019 года&lt;/<span className={s.codeTagBlue}>time</span>&gt;
    <br/>
    &lt;/<span className={s.codeTagBlue}>p</span>&gt;
    <br/>
    <br/>
    &lt;<span className={s.codeTagBlue}>p</span>&gt;
    <br/>
    &nbsp;&nbsp;
    Заседание состоялось в &lt;<span className={s.codeTagBlue}>time </span> <span className={s.codeTagYelow}>datetime</span>="<span className={s.codeTagPink}>2018-07-14T11:30</span>"&gt;11:30 утра&lt;/<span className={s.codeTagBlue}>time</span>&gt;
    <br/>
    &lt;/<span className={s.codeTagBlue}>p</span>&gt;
  </code>
);
export const data4 = (
  <code className={s.code}>
    &lt;<span className={s.codeTagBlue}>address</span>&gt; 
    <br/>
    &nbsp;&nbsp;
    г. Киев, &lt;<span className={s.codeTagBlue}>br</span>&gt;<br/>
    &nbsp;&nbsp;
  Бульвар Леси Украинки, д. 26, &lt;<span className={s.codeTagBlue}>br</span>&gt;<br/>
  &nbsp;&nbsp;
  4й этаж офис 427
    <br/>
    &lt;/<span className={s.codeTagBlue}>address</span>&gt;
    <br/>
    <br/>
    &lt;<span className={s.codeTagBlue}>address</span>&gt;
    <br/>
    &nbsp;&nbsp;
    &lt;<span className={s.codeTagBlue}>a </span> <span className={s.codeTagYelow}>href</span>="<span className={s.codeTagPink}>mailto:mango@mail.pig</span>"&gt;mango@mail.pig&lt;/<span className={s.codeTagBlue}>a</span>&gt;
    <br/>
    &nbsp;&nbsp;
    &lt;<span className={s.codeTagBlue}>a </span> <span className={s.codeTagYelow}>href</span>="<span className={s.codeTagPink}>tel:+1112223344</span>"&gt;(111) 222-33-44&lt;/<span className={s.codeTagBlue}>a</span>&gt;
    <br/>
    &lt;/<span className={s.codeTagBlue}>address</span>&gt;
  </code>
);
export const data5 = (
  <>
  Тег <span className={s.tag}>&lt;br/&gt;</span> (сокращение от line break) не используется для того, чтобы принудительно добавить разрывы строки между тегами или разбить массив текста на абазцы.
  </>
);
export const data6 = (
  <code className={s.code}>
    &lt;<span className={s.codeTagBlue}>p</span>&gt; 
    <br/>
    &nbsp;&nbsp;
    &lt;<span className={s.codeTagBlue}>strong</span>&gt;Внимание!&lt;/<span className={s.codeTagBlue}>strong</span>&gt;Заканчивается срок подписки.
    <br/>
    &nbsp;&nbsp;
    &lt;<span className={s.codeTagBlue}>strong</span>&gt;Учётная запись будет приостановлена.&lt;/<span className={s.codeTagBlue}>strong</span>&gt;Пожалуйста продлите
    <br/>
    &nbsp;&nbsp;
    подписку или свяжитесь со службой поддержки.
    <br/>
    &lt;/<span className={s.codeTagBlue}>p</span>&gt;
  </code>
);
export const data7 = (
  <>
  Для ассистивных технологий, например скринридера, текст обернутый в <span className={s.tag}>&lt;strong&gt;</span> имеет особую важность и будет дополнительно выделен интонацией.
  </>
);
export const data8 = (
  <code className={s.code}>
    &lt;<span className={s.codeTagBlue}>p</span>&gt; 
    &lt;<span className={s.codeTagBlue}>em</span>&gt; 
    в полном восторге
    &lt;/<span className={s.codeTagBlue}>em</span>&gt; 
    когда задерживают зарплату!
    &lt;/<span className={s.codeTagBlue}>p</span>&gt;
  </code>
);
export const data9 = (
  <>
  Для ассистивных технологий, например скринридера, текст обернутый в <span className={s.tag}>&lt;em&gt;</span> имеет особый акцент и будет дополнительно выделен интонацией.
  </>
);