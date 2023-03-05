import s from "../../../StyleBox.module.scss";

export const data1 = (
  <code className={s.code}>
    &lt;<span className={s.codeTagBlue}>p</span>&gt;
    <br />
    &nbsp;&nbsp; Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
    eligendi, a <br />
    &nbsp;&nbsp; eaque, esse itaque porro non exercitationem odio earum quos
    perferendis!
    <br />
    &lt;/<span className={s.codeTagBlue}>p</span>&gt;
    <br />
    <br />
    &lt;<span className={s.codeTagBlue}>p</span>&gt;
    <br />
    &nbsp;&nbsp; Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo,
    totam velit <br />
    &nbsp;&nbsp; asperiores non temporibus ut nisi minima?
    <br />
    &lt;/<span className={s.codeTagBlue}>p</span>&gt;
  </code>
);
export const data2 = (
  <>
    В редакторе VSCode, в HTML-документе можно набрать код{" "}
    <span className={s.tag}>&lt;lorem10&gt;</span>, после чего нажать клавишу{" "}
    <span className={s.tag}>&lt;Tab&gt;</span>. Это создаст массив текста из 10
    слов. Вместо 10 можно поставить любое число
  </>
);
export const data3 = (
  <code className={s.code}>
    &lt;<span className={s.codeTagBlue}>h1</span>&gt; Как заварить чай &lt;/
    <span className={s.codeTagBlue}>h1</span>&gt;
    <br />
    &lt;<span className={s.codeTagBlue}>p</span>&gt;
    <br />
    &nbsp;&nbsp; Пошаговая инструкция для чайников, просто повтори и у тебя всё
    получится!
    <br />
    &lt;/<span className={s.codeTagBlue}>p</span>&gt;
    <br />
    <br />
    &lt;<span className={s.codeTagBlue}>ol</span>&gt;
    <br />
    &nbsp;&nbsp; &lt;<span className={s.codeTagBlue}>li</span>&gt;Закипятить
    воду &lt;/<span className={s.codeTagBlue}>li</span>&gt;
    <br />
    &nbsp;&nbsp; &lt;<span className={s.codeTagBlue}>li</span>&gt;Засыпать чай в
    чашку &lt;/<span className={s.codeTagBlue}>li</span>&gt;
    <br />
    &nbsp;&nbsp; &lt;<span className={s.codeTagBlue}>li</span>&gt;Налить в чашку
    кипяток &lt;/<span className={s.codeTagBlue}>li</span>&gt;
    <br />
    &nbsp;&nbsp; &lt;<span className={s.codeTagBlue}>li</span>&gt;Ждать 10
    минут, после чего можно пить &lt;/<span className={s.codeTagBlue}>li</span>
    &gt;
    <br />
    &lt;/<span className={s.codeTagBlue}>ol</span>&gt;
    <br />
  </code>
);
export const data4 = (
  <code className={s.code}>
    &lt;<span className={s.codeTagBlue}>h1</span>&gt; Самые горячие курорты
    &lt;/<span className={s.codeTagBlue}>h1</span>&gt;
    <br />
    &lt;<span className={s.codeTagBlue}>p</span>&gt;
    <br />
    &nbsp;&nbsp; В этом году эксперты рекомендуют посетить следующие локации.
    <br />
    &lt;/<span className={s.codeTagBlue}>p</span>&gt;
    <br />
    <br />
    &lt;<span className={s.codeTagBlue}>ul</span>&gt;
    <br />
    &nbsp;&nbsp; &lt;<span className={s.codeTagBlue}>li</span>&gt;Тунис &lt;/
    <span className={s.codeTagBlue}>li</span>&gt;
    <br />
    &nbsp;&nbsp; &lt;<span className={s.codeTagBlue}>li</span>&gt;Турция &lt;/
    <span className={s.codeTagBlue}>li</span>&gt;
    <br />
    &nbsp;&nbsp; &lt;<span className={s.codeTagBlue}>li</span>&gt;Греция &lt;/
    <span className={s.codeTagBlue}>li</span>&gt;
    <br />
    &nbsp;&nbsp; &lt;<span className={s.codeTagBlue}>li</span>&gt;Египет &lt;/
    <span className={s.codeTagBlue}>li</span>&gt;
    <br />
    &lt;/<span className={s.codeTagBlue}>ul</span>&gt;
    <br />
  </code>
);
export const data5 = (
  <>
    По спецификации в теги <span className={s.tag}>&lt;ul&gt;</span> и{" "}
    <span className={s.tag}>&lt;ol&gt;</span> можно вкладывать только элементы
    спика - теги <span className={s.tag}>&lt;li&gt;</span> . При этом, внутри
    тегов <span className={s.tag}>&lt;li&gt;</span> , могут быть вложены другие
    произвольные теги.
  </>
);
export const data6 = (
  <code className={s.code}>
    &lt;<span className={s.codeTagBlue}>ul</span>&gt; <br/>
    &nbsp; &nbsp; 
    &lt;<span className={s.codeTagBlue}>li</span>&gt; <br/>
    &nbsp; &nbsp; &nbsp; &nbsp; 
    Компьютеры и комплектующие <br/>
    &nbsp; &nbsp; &nbsp; &nbsp; 
    &lt;<span className={s.codeTagBlue}>ul</span>&gt; <br/>
    &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
    &lt;<span className={s.codeTagBlue}>li</span>&gt;Процессоры&lt;/<span className={s.codeTagBlue}>li</span>&gt;
    <br/>
    &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
    &lt;<span className={s.codeTagBlue}>li</span>&gt;Мониторы&lt;/<span className={s.codeTagBlue}>li</span>&gt;
    <br/>
    &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
    &lt;<span className={s.codeTagBlue}>li</span>&gt;Видеокарты&lt;/<span className={s.codeTagBlue}>li</span>&gt;
    <br/>
    &nbsp; &nbsp; &nbsp; &nbsp; 
    &lt;/<span className={s.codeTagBlue}>ul</span>&gt; <br/>
    &nbsp; &nbsp; 
    &lt;<span className={s.codeTagBlue}>li</span>&gt; <br/>
    &nbsp; &nbsp; 
    &lt;<span className={s.codeTagBlue}>li</span>&gt; <br/>
    &nbsp; &nbsp; &nbsp; &nbsp; 
    Компьютеры и комплектующие <br/>
    &nbsp; &nbsp; &nbsp; &nbsp; 
    &lt;<span className={s.codeTagBlue}>ul</span>&gt; <br/>
    &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
    &lt;<span className={s.codeTagBlue}>li</span>&gt;Холодильники&lt;/<span className={s.codeTagBlue}>li</span>&gt;
    <br/>
    &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
    &lt;<span className={s.codeTagBlue}>li</span>&gt;Телевизоры&lt;/<span className={s.codeTagBlue}>li</span>&gt;
    <br/>
    &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
    &lt;<span className={s.codeTagBlue}>li</span>&gt;Стиральные машины&lt;/<span className={s.codeTagBlue}>li</span>&gt;
    <br/>
    &nbsp; &nbsp; &nbsp; &nbsp; 
    &lt;/<span className={s.codeTagBlue}>ul</span>&gt; <br/>
    &nbsp; &nbsp; 
    &lt;<span className={s.codeTagBlue}>li</span>&gt; <br/>
    &nbsp; &nbsp; 
    &lt;<span className={s.codeTagBlue}>li</span>&gt; <br/>
    &nbsp; &nbsp; &nbsp; &nbsp; 
    Компьютеры и комплектующие <br/>
    &nbsp; &nbsp; &nbsp; &nbsp; 
    &lt;<span className={s.codeTagBlue}>ul</span>&gt; <br/>
    &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
    &lt;<span className={s.codeTagBlue}>li</span>&gt;Кресла&lt;/<span className={s.codeTagBlue}>li</span>&gt;
    <br/>
    &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
    &lt;<span className={s.codeTagBlue}>li</span>&gt;Матрасы&lt;/<span className={s.codeTagBlue}>li</span>&gt;
    <br/>
    &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
    &lt;<span className={s.codeTagBlue}>li</span>&gt;Электрокамины&lt;/<span className={s.codeTagBlue}>li</span>&gt;
    <br/>
    &nbsp; &nbsp; &nbsp; &nbsp; 
    &lt;/<span className={s.codeTagBlue}>ul</span>&gt; <br/>
    &nbsp; &nbsp; 
    &lt;<span className={s.codeTagBlue}>li</span>&gt; <br/>
    &lt;/<span className={s.codeTagBlue}>ul</span>&gt; 
  </code>
);
export const data7=(
<code>
&lt;<span className={s.codeTagBlue}>a</span>  
&nbsp;<span className={s.codeTagYelow}>href</span>="<span className={s.codeTagPink}>https://google.com</span>"&gt;
Ссылка на главную страницу Google
&lt;/<span className={s.codeTagBlue}>a</span>&gt;  
</code>
)
export const data8=(
  <code>
    <span className={s.codeText}>&lt;!-- Ссылка на внешний ресурс, откроется в текущей вкладке --&gt;</span>
    <br/>
    &lt;<span className={s.codeTagBlue}>a</span>  
    &nbsp;<span className={s.codeTagYelow}>href</span>="<span className={s.codeTagPink}>https://www.facebook.com/</span>"&gt;
    Facebook
    &lt;/<span className={s.codeTagBlue}>a</span>&gt;
    <br/>
    <br/>
    <span className={s.codeText}>&lt;!-- Ссылка на внешний ресурс, откроется в новой вкладке --&gt;</span>
    <br/>
    &lt;<span className={s.codeTagBlue}>a</span>  
    &nbsp;<span className={s.codeTagYelow}>href</span>="<span className={s.codeTagPink}>https://www.facebook.com/</span> <span className={s.codeTagYelow}>target</span>="<span className={s.codeTagPink}>_blank</span>" <span className={s.codeTagYelow}>rel</span>="<span className={s.codeTagPink}>noreferrer noopener</span>"&gt;
    <br/>
    &nbsp;
    Facebook
    <br/>
    &lt;/<span className={s.codeTagBlue}>a</span>&gt;
  </code>
)
export const data9=(
  <code>
    <span className={s.codeText}>&lt;!-- Ссылка на скачивание файла --&gt;</span>
    <br/>
    &lt;<span className={s.codeTagBlue}>a</span>  
    &nbsp;<span className={s.codeTagYelow}>href</span>="<span className={s.codeTagPink}>/путь/к/cv.pdf</span>" <span className={s.codeTagYelow}>download</span>&gt;
    Скачать резюме
    &lt;/<span className={s.codeTagBlue}>a</span>&gt;
    <br/>
    
  </code>
)
export const data10=(
  <code>
    <span className={s.codeText}>&lt;!-- Ссылка на телефонный номер --&gt;</span>
    <br/>
    &lt;<span className={s.codeTagBlue}>a</span>  
    &nbsp;<span className={s.codeTagYelow}>href</span>="<span className={s.codeTagPink}>tel:+14251234563</span>"&gt;
    +1 (425) 123-45-63
    &lt;/<span className={s.codeTagBlue}>a</span>&gt;
    <br/>
    <br/>
    <span className={s.codeText}>&lt;!-- Ссылка на адрес электронной почты --&gt;</span>
    <br/>
    &lt;<span className={s.codeTagBlue}>a</span>  
    &nbsp;<span className={s.codeTagYelow}>href</span>="<span className={s.codeTagPink}>mailto:example@mail.ru</span>"&gt;
    
     example@gmail.com
   
    &lt;/<span className={s.codeTagBlue}>a</span>&gt;
  </code>
)
export const data11=(
  <code>
    &lt;<span className={s.codeTagBlue}>button</span>  
    &nbsp;<span className={s.codeTagYelow}>type</span>="<span className={s.codeTagPink}>button</span>"&gt;
    Открыть модальное окно
    &lt;/<span className={s.codeTagBlue}>button</span>&gt;
    <br/>
  </code>
)
export const data12 = (
  <code className={s.code}>
    <span className={s.codeText}>&lt;!DOCTYPE html&gt;</span>
    <br />
    &lt;<span className={s.codeTagBlue}>html </span>{" "}
    <span className={s.codeTagYelow}>lang</span>="
    <span className={s.codeTagPink}>ru</span>"&gt;
    <br />
    &nbsp;&nbsp; &lt;<span className={s.codeTagBlue}>head</span>&gt;
    <br />
    
  
    &nbsp;&nbsp;&nbsp;&nbsp; &lt;<span className={s.codeTagBlue}>
      meta
    </span>{" "}
    <span className={s.codeTagYelow}>charset</span>="
    <span className={s.codeTagPink}>utf-8</span>"/&gt;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp; &lt;<span className={s.codeTagBlue}>
      meta
    </span>{" "}
    <span className={s.codeTagYelow}>name</span>="
    <span className={s.codeTagPink}>description</span>"{" "}
    <span className={s.codeTagYelow}>content</span>="
    <span className={s.codeTagPink}>Инструкция по эксплуатации пирожков</span>
    "/&gt;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp; &lt;<span className={s.codeTagBlue}>title</span>
    &gt;Пирожки это внусно!&lt;/
    <span className={s.codeTagBlue}>title</span>&gt;
    <br />
    &nbsp;&nbsp; &lt;/<span className={s.codeTagBlue}>head</span>&gt;
    <br />
    &nbsp;&nbsp; &lt;<span className={s.codeTagBlue}>body</span>&gt;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &lt;<span className={s.codeTagBlue}>p</span> <span className={s.codeTagYelow}>lang</span>="<span className={s.codeTagPink}>en</span>"&gt; Operating instructions &lt;/<span className={s.codeTagBlue}>p</span>&gt; 
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &lt;<span className={s.codeTagBlue}>p</span> <span className={s.codeTagYelow}>lang</span>="<span className={s.codeTagPink}>fr</span>"&gt; Manuel d'utilisation &lt;/<span className={s.codeTagBlue}>p</span>&gt;
    <br/>
    &nbsp;&nbsp; &lt;/<span className={s.codeTagBlue}>body</span>&gt;
    <br />
    &lt;/<span className={s.codeTagBlue}>html</span>&gt;
  </code>
);