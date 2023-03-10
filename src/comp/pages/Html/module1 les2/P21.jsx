import { HealthyBox } from 'comp/utils/HealthyBox';
import s from '../../StyleBox.module.scss';
import sixteen from '../../../../img/html/16.png';
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
        <p>Таблица это набор строк с ячейками. Познакомимся с базовыми тегами.</p>
        <ul className={s.font}>
          <li><span className={s.tag}>&lt;table&gt;</span> - определяет всю таблицу, контейнер для контента.</li>
          <li><span className={s.tag}>&lt;tr&gt;</span> - строка таблицы (table row). Не может быть пустой, должна содержать хотя бы одну ячейку.</li>
          <li><span className={s.tag}>&lt;td&gt;</span> - ячейка таблицы (table data). Можно использовать только внутри строки. В каждой строке таблицы должно быть одинаковое количество ячеек.</li>
        </ul>
        <p>Разметим расписание поездов таблицей с тремя строками.</p>
      </div>
    </>
  );
};
