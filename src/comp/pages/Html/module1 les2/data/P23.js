import s from '../../../StyleBox.module.scss';
export const data1 = (
  <>
    В стандарте кодирования <span className={s.tag}>Unicode</span> хранятся
    знаки почти всех языков мира, а также специальные и служебные символы.
    Символьные подстановки это <span className={s.tag}>ссылки-мнемоники</span>,
    по которым браузер знает какой Unicode-символ нужно отобразить.
  </>
);
export const data2 = (
  <code className={s.code}>
    &lt;<span className={s.codeTagBlue}>p</span>&gt; 
    Все права защищены <span className={s.textLink}><span>&</span>copy;</span> Lex, 2020
    &lt;/<span className={s.codeTagBlue}>p</span>&gt;
    <br/>
    &lt;<span className={s.codeTagBlue}>p</span>&gt; 
    Все права защищены <span className={s.textLink}><span>&</span>#169;</span> Lex, 2020
    &lt;/<span className={s.codeTagBlue}>p</span>&gt;
    <br/>
    &lt;<span className={s.codeTagBlue}>p</span>&gt; 
    Все права защищены <span className={s.textLink}><span>&</span>#xa9;</span> Lex, 2020
    &lt;/<span className={s.codeTagBlue}>p</span>&gt;
  </code>
);
export const data3 = (
  <code className={s.code}>
    &lt;<span className={s.codeTagBlue}>p</span>&gt; 
    Для полужирного текста, выделите его тэгами &lt;<span className={s.codeTagBlue}>strong</span>&gt; и &lt;/<span className={s.codeTagBlue}>strong</span>&gt;.
    &lt;/<span className={s.codeTagBlue}>p</span>&gt;
  </code>
);
export const data4 = (
  <code className={s.code}>
    &lt;<span className={s.codeTagBlue}>p</span>&gt; 
    <br/>
    Для полужирного текста выделите его тэгами <span className={s.textLink}><span>&</span>lt;</span>strong<span className={s.textLink}><span>&</span>gt;</span> и <span className={s.textLink}><span>&</span>lt;</span>/strong<span className={s.textLink}><span>&</span>gt;</span>.
    <br/>
    &lt;/<span className={s.codeTagBlue}>p</span>&gt;
  </code>
);