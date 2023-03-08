import { Copy } from '../../../utils/Test';
import s from '../../StyleBox.module.scss';

import { HealthyBox } from '../../../utils/HealthyBox';
import { data1, data2, data3, data4, data5 } from './data/P7';

export const P7 = () => {
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
      </div>
    </>
  );
};
