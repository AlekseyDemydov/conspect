import { HealthyBox } from 'comp/utils/HealthyBox';
import { Copy } from 'comp/utils/Test';
import s from '../../StyleBox.module.scss';
import { data1, data2, data3, data4 } from './data/P23';
export const P23 = () => {
  return (
    <>
      <div className={s.boxInfo}>
        <h1>Символьные подстановки</h1>
        <br />
        <p>
          Не все символы можно набрать на клавиатуре. Например символ
          зарегистрированного торгового знака ®, торговой марки ™, авторского
          права ©. Для ввода подобных знаков используют символьные подстановки.
        </p>
        <br />
        <HealthyBox title="ИНТЕРЕСНО" text={data1} />
        <br />
        <p>
          Символьные подстановки это специальные строки, преобразуемые
          браузерами в символы. Подстановку можно осуществить несколькими
          способами.
        </p>
        <ul className={s.font}>
          <li>
            <span className={s.tag}>&мнемокод;</span> - вставка символа по его
            «мнемокоду», то есть имени
          </li>
          <li>
            {' '}
            <span className={s.tag}>&#КОД10;</span> - вставка символа по его
            десятичному коду
          </li>
          <li>
            {' '}
            <span className={s.tag}>&#xКОД16;</span> - вставка символа по его
            шеснадцатиричному коду
          </li>
        </ul>
        <p>Например, символ авторского права © можно добавить так.</p>
        <Copy text={data2} />
        <br />
        <p>
          Символьные подстановки применяются не только для вставки символов
          которых нет на клавиатуре, но так же для символов имеющих специальное
          назначение в HTML. Например если нужно вывести на страницу текст,
          содержащий тэги как текст.
        </p>
        <Copy text={data3} />
        <br />
        <p>
          Символы <span className={s.tag}>&lt;</span> и{' '}
          <span className={s.tag}>&gt;</span> это часть синтаксиса HTML,
          открывают и закрывют теги. Поэтому непосредственная вставка их в код
          страницы приведет к интерпретации{' '}
          <span className={s.tag}>&lt;strong&gt;</span> и{' '}
          <span className={s.tag}>&lt;/strong&gt;</span> как тэгов. В таком
          случае вместо символов &lt; и &gt; необходимо использовать символьные
          подстановки{' '}
          <span className={s.tag}>
            <span>&</span>lt;
          </span>{' '}
          и{' '}
          <span className={s.tag}>
            <span>&</span>gt;
          </span>
          .
        </p>
        <Copy text={data4} />
        <br />
        <p>
          Есть{' '}
          <a
            href="https://html.spec.whatwg.org/multipage/named-characters.html"
            className={s.textLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            официальная страница W3C
          </a>{' '}
          и{' '}
          <a
            href="https://www.toptal.com/designers/htmlarrows/symbols/"
            className={s.textLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            сервис от Toptal
          </a>
          , где можно найти мнемонику для любого символа.
        </p>
        <br />
        <HealthyBox title='ИНТЕРЕСНО' text="Спецсимволы, не имеющие мнемоники, могут не отображаться вовсе или же отображаться некорректно в каких-то браузерах. В таком случае их заменяют на иконки (изображения)." />
      </div>
    </>
  );
};
