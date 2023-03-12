import { HealthyBox } from 'comp/utils/HealthyBox';
import s from '../../StyleBox.module.scss';
import sixteen from '../../../../img/html/16.png';
import { Copy } from 'comp/utils/Test';
import { data1, data2, data3, data4, data5, data6, data7 } from './data/P21';
import seventeen from '../../../../img/html/17.png';

export const P21 = () => {
  return (
    <>
      <div className={s.boxInfo}>
        <h1>Таблицы</h1>
        <br />
        <p>
          <a
            href="https://html.spec.whatwg.org/multipage/tables.html#tables"
            className={s.textLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Таблицы
          </a>{' '}
          позволяют отобразить сложные связи, размещая в ячейках любой контент.
          Использовать их нужно только для разметки табличных данных: расписание
          транспорта, календарь, результаты матчей, финансовые операции, меню в
          ресторане, прайслист и т. п. То есть информацию, которую логично
          представить в табличном виде, например используя Google Sheets.
        </p>
        <HealthyBox
          title="ПОЛЕЗНО"
          text="Элементы таблицы семантически описывают табличные данные, и использование их для других целей это нарушение семантики."
        />
        <br />
        <p>Будем набирать разметку вот такого расписания поездов.</p>
        <img src={sixteen} alt="" className={s.imgLess} />
        <p>
          Таблица это набор строк с ячейками. Познакомимся с базовыми тегами.
        </p>
        <ul className={s.font}>
          <li>
            <span className={s.tag}>&lt;table&gt;</span> - определяет всю
            таблицу, контейнер для контента.
          </li>
          <li>
            <span className={s.tag}>&lt;tr&gt;</span> - строка таблицы (table
            row). Не может быть пустой, должна содержать хотя бы одну ячейку.
          </li>
          <li>
            <span className={s.tag}>&lt;td&gt;</span> - ячейка таблицы (table
            data). Можно использовать только внутри строки. В каждой строке
            таблицы должно быть одинаковое количество ячеек.
          </li>
        </ul>
        <p>Разметим расписание поездов таблицей с тремя строками.</p>
        <br />
        <Copy text={data1} />
        <HealthyBox
          title="ПОЛЕЗНО"
          text="По умолчанию у таблицы нет особого оформления, например такой тёмной рамки как на изображении. Для этого используется CSS, как и для любого другого оформления контента."
        />
        <br />
        <h2>Ячейки-заголовки</h2>
        <br />
        <p>
          Для того, чтобы создать строку с заголовками столбцов, используем
          стандартный тег &lt;tr&gt; для строки, а ячейки размечаем специальным
          тегом &lt;th&gt; (table header) - семантическим тегом
          ячейки-заголовка. По умолчанию текст внутри &lt;th&gt; выделяется
          жирным и центрируется.
        </p>
        <Copy text={data2} />
        <br />
        <h2>Секции таблицы</h2>
        <br />
        <p>
          Для повышения семантики разметки таблицы есть несколько структурных
          тегов.
        </p>
        <br />
        <ul className={s.font}>
          <li>
            <span className={s.tag}>&lt;thead&gt;</span> - шапка, оборачивает
            группу строк таблицы в области заголовка.
          </li>
          <li>
            <span className={s.tag}>&lt;tbody&gt;</span> - тело, оборачивает
            основную группу строк таблицы.
          </li>
          <li>
            <span className={s.tag}>&lt;tfoot&gt;</span> - подвал, обозначает
            группу строк таблицы в области нижнего колонтитула.
          </li>
        </ul>
        <Copy text={data3} />
        <br />
        <h2>Заголовок таблицы</h2>
        <p>
          Если у таблицы есть заголовок, конечно можно разметить его используя
          теги заголовков.
        </p>
        <br />
        <Copy text={data4} />
        <br />
        <p>
          Но более семантично будет использовать специальный табличный тег{' '}
          <span className={s.tag}>&lt;caption&gt;</span>, который должен
          располагаться внутри таблицы, самым первым элементом.
        </p>
        <Copy text={data5} />
        <br />
        <p>
          Вот живой пример результата. На вкладке CSS можно посмотреть стили,
          где к каждому из CSS-правил есть комментарий с пояснением.
        </p>
        <iframe
          className={s.iframe}
          scrolling="no"
          title="lesson-02-schedule-table"
          src="https://codepen.io/goit-academy/embed/dyXboZv?default-tab=html"
          frameBorder="no"
          // loading="lazy"
          allowtransparency="true"
          allowFullScreen={true}
        ></iframe>
        <br />
        <h2>Группировка ячеек</h2>
        <p>
          Некоторые таблицы сделаны так, что нужно объединить несколько ячеек по
          горизонтали или вертикали.
        </p>
        <br />
        <img src={seventeen} alt="" className={s.imgLess} />
        <br />
        <p>
          Напишем разметку такой таблицы добавив дополнительные ячейки, учитывая
          что «Облачный сервис» займёт две ячейки по вертикали, а
          «Использование» - три по горизонтали.
        </p>
        <br />
        <Copy text={data6} />
        <br />
        <p>
          Обратите внимание на пустые теги{' '}
          <span className={s.tag}>&lt;th&gt;</span>, в каждой строке должно быть
          одинаковое количество ячеек, поэтому «лишние» пока что оставлям
          пустыми. В результате получим такую таблицу.
        </p>
        <iframe
          className={s.iframe}
          scrolling="no"
          title="lesson-02-usage-table-basic"
          src="https://codepen.io/goit-academy/embed/rNLBVKV?default-tab=html"
          frameBorder="no"
          // loading="lazy"
          allowtransparency="true"
          allowFullScreen={true}
        ></iframe>
        <br />
        <p>
          Правило равенства числа ячеек в строках и столбцах нельзя отменить, но
          можно обойти. Для того чтобы расширить ячейку по горизонтали
          используется атрибут <span className={s.tag}>colspan</span>, по
          вертикали - <span className={s.tag}>rowspan</span>.
        </p>
        <p>
          Нужно определить группу ячеек для слияния и затем самой верхней и
          левой ячейке группы задать атрибут{' '}
          <span className={s.tag}>colspan</span> с числом ячеек требующих
          объединения справа и/или <span className={s.tag}>rowspan</span> снизу.
          После этого обязательно нужно удалить ставшие ненужными ячейки справа
          и/или снизу.
        </p>
        <p className={s.font}>
          В нашей задаче ячейка «Облачный сервис» должна занимать 2 ячейки по
          вертикали, поэтому добавляем ей{' '}
          <span className={s.tag}>rowspan="2"</span> и удаляем пустой{' '}
          <span className={s.tag}>&lt;th&gt;</span> на строке ниже. Аналогично с
          ячейкой «Использование», устанавливаем{' '}
          <span className={s.tag}>colspan="3"</span> и удаляем две соседние
          ячейки справа в этой строке.
        </p>
        <Copy text={data7} />
        <br />
        <HealthyBox
          title="ИНТЕРЕСНО"
          text="Правило равенства числа ячеек будет визуально нарушено, но браузер учитывает ячейки в объединённых группах, поэтому всё правильно."
        />
        <br />
        <iframe
          className={s.iframe}
          scrolling="no"
          title="lesson-02-usage-table-final"
          src="https://codepen.io/goit-academy/embed/pobzJxM?default-tab=html"
          frameBorder="no"
          // loading="lazy"
          allowtransparency="true"
          allowFullScreen={true}
        >
        </iframe>
      </div>
    </>
  );
};
