import { Copy } from '../../../utils/Test';
import s from '../../StyleBox.module.scss';
import thirteen from '../../../../img/html/13.jpg';

import { HealthyBox } from '../../../utils/HealthyBox';
import { data1, data2, data3, data4, data5, data6, data7 } from './data/P17';

export const P17 = () => {
  return (
    <>
      <div className={s.boxInfo}>
        <h1>Структурная разметка</h1>
        <p>
          Есть целый набор семантических тегов для разметки больших логических
          разделов и улучшения структурной семантики страницы. Каждый из них
          может быть использован при определённых условиях. Это влияет на работу
          ассистивных технологий, индексирование страницы и её рейтинг выдачи в
          поиске.
        </p>
        <h2>Потоковое содержимое</h2>
        <br />
        <h3>
          Тег <span className={s.tag}>&lt;header&gt;</span>{' '}
        </h3>
        <br />
        <p>
          Шапка (хедер) выделяет вводную часть всей страницы, сложной секции или
          статьи. Обычно содержит логотип, навигацию, вводный текст, сложный
          заголовок. Может быть несколько на странице.
        </p>
        <Copy text={data1} />
        <a
          href="https://html.spec.whatwg.org/multipage/sections.html#the-header-element"
          className={s.textLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ссылка на спецификацию
        </a>
        <br />
        <br />
        <h3>
          Тег <span className={s.tag}>&lt;footer&gt;</span>{' '}
        </h3>
        <br />
        <p>
          Подвал (футер) это финальная часть всей страницы, её раздела или
          статьи. Часто содержит копирайт, список ссылок на социальные сети,
          контактную информацию и так далее. Может быть несколько на странице.
        </p>
        <Copy text={data2} />
        <a
          href="https://html.spec.whatwg.org/multipage/sections.html#the-footer-element"
          className={s.textLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ссылка на спецификацию
        </a>
        <br />
        <br />
        <h3>
          Тег <span className={s.tag}>&lt;main&gt;</span>{' '}
        </h3>
        <br />
        <p>
          Основное, не повторяющееся на других страницах сайта (уникальное),
          содержание. Может быть только один на странице.
        </p>
        <Copy text={data3} />
        <a
          href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-main-element"
          className={s.textLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ссылка на спецификацию
        </a>
        <br />
        <br />
        <h2>Смысловые разделы</h2>
        <br />
        <h3>
          Тег <span className={s.tag}>&lt;nav&gt;</span>{' '}
        </h3>
        <br />
        <p>
          Определяет раздел основной навигации со ссылками на секции текущей или
          других страниц. Используется только для основной навигации, а не для
          любой группы ссылок в документе.
        </p>
        <Copy text={data4} />
        <a
          href="https://html.spec.whatwg.org/multipage/sections.html#the-nav-element"
          className={s.textLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ссылка на спецификацию
        </a>
        <br />
        <br />
        <h3>
          Тег <span className={s.tag}>&lt;article&gt;</span>{' '}
        </h3>
        <br />
        <p>
          Независимая, отделяемая и, имеющая значение вне, часть документа.
          Например пост на форуме, твит, статья в блоге, виджет с рекламой,
          инстаграм история, карточка товара в магазине.
        </p>
        <br />
        <Copy text={data5} />
        <br />
        <HealthyBox
          title="ПОЛЕЗНО"
          text="Если разделу документа можно дать имя, вынести его вне сайта и он будет иметь смысл - это <article>. Обязателен заголовок."
        />
        <br />
        <a
          href="https://html.spec.whatwg.org/multipage/sections.html#the-article-element"
          className={s.textLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ссылка на спецификацию
        </a>
        <br />
        <br />
        <h3>
          Тег <span className={s.tag}>section</span>{' '}
        </h3>
        <br />
        <p>
          Крупный раздел, объединяющий содержание по смыслу. Неотделим от
          основного документа. Например секция списка товаров, блок личной
          информации в профиле пользователя, раздел контактной информации.
        </p>
        <Copy text={data6} />
        <HealthyBox
          title="ПОЛЕЗНО"
          text="Если разделу документа можно дать имя, но вне сайта он не будет иметь смысла - это <section>. Желателен заголовок."
        />
        <br />
        <a
          href="https://html.spec.whatwg.org/multipage/sections.html#the-section-element"
          className={s.textLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ссылка на спецификацию
        </a>
        <br />
        <br />
        <h3>
          Тег <span className={s.tag}>&lt;div&gt;</span>{' '}
        </h3>
        <br />
        <p>
          Универсальный контейнер без семантического значения. Используется как
          блок-обёртка для последующей стилизации контента.
        </p>
        <HealthyBox
          title="ПОЛЕЗНО"
          text={`Если не получается дать группе контента вменяемое имя (не "правая колонка", а имеющее смысл) - это <div> и скорее всего вам просто нужен общий контейнер для оформления.`}
        />
        <br />
        <a
          href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-div-element"
          className={s.textLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ссылка на спецификацию
        </a>
        <br />
        <br />
        <h3>Алгоритм выбора тега</h3>
        <br />
        <p>
          Не только новичкам бывает трудно решить какой тег использовать для
          разметки блока контента основываясь на его семантическом значении.
          Пользуйтесь этим алгоритмом для определения подходящего тега.
        </p>
        <br />
        <img src={thirteen} alt="" className={s.imgLess} />
        <br />
        <h3>Разметка страницы</h3>
        <br />
        <p>
          Используя все рассмотренные теги наберём разметку простой страницы
          начинающей веб-студии.
        </p>
        <iframe
          className={s.iframe}
          scrolling="no"
          title="lesson-01-sectioning-example"
          src="https://codepen.io/goit-academy/embed/ExPmoKE?default-tab=html"
          frameBorder="no"
          // loading="lazy"
          allowtransparency="true"
          allowFullScreen={true}
        ></iframe>
        <br />
        <p>
          В примере не хватает разметки скелета документа, потому что его
          автоматически добавляет сама интерактивная площадка <a
          href="https://codepen.io/your-work"
          className={s.textLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          codepen.io.
        </a> Для
          полноты картины запишем базовую разметку документа.
        </p>
        <Copy text={data7} />
      </div>
    </>
  );
};
