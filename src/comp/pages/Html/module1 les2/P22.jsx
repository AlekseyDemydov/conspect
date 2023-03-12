import { HealthyBox, HealthyBoxRed } from 'comp/utils/HealthyBox';
import { Copy } from 'comp/utils/Test';
import s from '../../StyleBox.module.scss';
import {
  data1,
  data2,
  data3,
  data4,
  data5,
  data6,
  data7,
  data8,
  data9,
} from './data/P22';
export const P22 = () => {
  return (
    <>
      <div className={s.boxInfo}>
        <h1>Разметка текста</h1>
        <br />
        <h2>
          Тег <span className={s.tag}>&lt;dl&gt;</span>{' '}
        </h2>
        <br />
        <p>
          <a
            href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-dl-element"
            className={s.textLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Тег{' '}
            <span className={s.tag} style={{ color: '#25c2a0' }}>
              &lt;dl&gt;
            </span>{' '}
            (description list)
          </a>{' '}
          это контейнер для списка пар терминов и их описаний, то есть словарь.
          Для разметки терминов есть тег{' '}
          <span className={s.tag}>&lt;dt&gt;</span>, а для описаний{' '}
          <span className={s.tag}>&lt;dd&gt;</span>. Используется для разметки
          списка определений, например при создании глоссария, телефонного
          справочника и т. п.
        </p>
        <iframe
          className={s.iframe}
          scrolling="no"
          title="lesson-02-description-list"
          src="https://codepen.io/goit-academy/embed/mdEbJNK?default-tab=html"
          frameBorder="no"
          // loading="lazy"
          allowtransparency="true"
          allowFullScreen={true}
        ></iframe>
        <br />
        <br />
        <h2>
          Тег <span className={s.tag}>&lt;span&gt;</span>{' '}
        </h2>
        <p>
          Универсальный контейнер для мелкого текстового контента, например
          отдельных слов, частей слов или целых фраз внутри текстового массива.
          Аналогично тегу Тег <span className={s.tag}>&lt;div&gt;</span>, не
          имеет никакого семантического значения и используется для
          дополнительной стилизации.
        </p>
        <Copy text={data1} />
        <br />
        <HealthyBox title="ИНТЕРЕСНО" text={data2} />
        <br />
        <h2>
          Тег <span className={s.tag}>&lt;pre&gt;</span>{' '}
        </h2>
        <p>
          По умолчанию браузер игнорирует переносы строк и более одного пробела
          подряд. Этот тег позволяет добавить преформатированный текст с
          принудительными переносами строк. Например разметка текста песни или
          стихотворения.
        </p>
        <br />
        <iframe
          className={s.iframe}
          scrolling="no"
          title="lesson-02-pre"
          src="https://codepen.io/goit-academy/embed/vYKBNLr?default-tab=html%2Cresult"
          frameBorder="no"
          // loading="lazy"
          allowtransparency="true"
          allowFullScreen={true}
        ></iframe>
        <br />
        <br />
        <h2>
          Тег <span className={s.tag}>&lt;sup&gt;</span> и{' '}
          <span className={s.tag}>&lt;sub&gt;</span>
        </h2>
        <br />
        <p>
          Предназначены для отображения символов в верхнем (
          <span className={s.tag}>&lt;sup&gt;</span>, сокращение от superscript)
          и нижнем (<span className={s.tag}>&lt;sub&gt;</span>, сокращение от
          subscript) индексе. Например для разметки несложных математических или
          химических формул.
        </p>
        <iframe
          className={s.iframe}
          scrolling="no"
          title="lesson-02-subsup"
          src="https://codepen.io/goit-academy/embed/WNxeQxe?default-tab=html%2Cresult"
          frameBorder="no"
          // loading="lazy"
          allowtransparency="true"
          allowFullScreen={true}
        ></iframe>
        <br />
        <br />
        <h2>
          Тег <span className={s.tag}>&lt;time&gt;</span>
        </h2>
        <br />
        <p>
          Дату и время можно написать просто текстом, но лучше использовать
          специальный тег <span className={s.tag}>&lt;time&gt;</span>. Дата для
          человека это текст внутри тега, а для машины - значение атрибута{' '}
          <span className={s.tag}>datetime</span> в формате{' '}
          <a
            href="https://ru.wikipedia.org/wiki/ISO_8601"
            className={s.textLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            ISO 8601
          </a>
          .
        </p>
        <br />
        <Copy text={data3} />
        <br />
        <p>
          Браузер отобразит только текст внутри тега. Человек увидит понятный
          текст, а ассистивная технология прочитает атрибут{' '}
          <span className={s.tag}>datetime</span> и получит точное значение в
          нужном формате.
        </p>
        <br />
        <h2>
          Тег <span className={s.tag}>&lt;address&gt;</span>
        </h2>
        <br />
        <p>
          Предназначен для хранения контактной информации об авторе статьи,
          блока информации или веб-страницы в целом. Контактная информация может
          быть в любой подходящей форме, например физический адрес, адрес
          электронной почты, ссылка на сайт, номер телефона, тег соцсети.
        </p>
        <Copy text={data4} />
        <br />
        <p>
          Обратите внимание на тег &lt;<span className={s.codeTagBlue}>br</span>
          &gt;, он используется для разметки массива текста с принудительными
          переносами строк для визуального форматирования. Например разметка
          одной строки адреса в несколько строк.
        </p>
        <HealthyBoxRed title="ВНИМАНИЕ" text={data5} />
        <br />
        <h2>
          Тег <span className={s.tag}>&lt;strong&gt;</span> и{' '}
          <span className={s.tag}>&lt;b&gt;</span>
        </h2>
        <br />
        <p>
          Используются для выделения важного слова или целой фразы внутри
          текста. Визуально оба тега делают текст жирным, и на первый взгляд
          разницы между ними нет, но это не так.
        </p>
        <p>
          Тег <span className={s.tag}>&lt;strong&gt;</span> семантически
          подчеркивает текст как важный и указывает, что это значимое слово или
          фраза. Например выделить предупреждение или любую часть текста, на
          которую пользователь должен обратить внимание в первую очередь.
        </p>
        <Copy text={data6} />
        <br />
        <p>
          Тег <span className={s.tag}>&lt;b&gt;</span> (сокращение от bold)
          делает текст только визуально жирным, привлекая внимание, но не
          придавая особой важности.
        </p>
        <HealthyBox title="ИНТЕРЕСНО" text={data7} />
        <br />
        <h2>
          Тег <span className={s.tag}>&lt;em&gt;</span> и{' '}
          <span className={s.tag}>&lt;i&gt;</span>
        </h2>
        <br />
        <p>
          Используются для акцентирования внимания на части текста. Визуально
          оба тега делают текст курсивным, и на первый взгляд разницы между ними
          нет, но это не так.
        </p>
        <p>
          Тег <span className={s.tag}>&lt;em&gt;</span> (сокращение от{' '}
          <b>emphasis</b> ) семантически выделяет текст, на который сделан
          особый акцент, меняющий смысл фразы. Например можно выделить сарказм.
        </p>
        <br />
        <Copy text={data8} />
        <br />
        <p>
          Тег <span className={s.tag}>&lt;i&gt;</span> (сокращение от{' '}
          <b>italic</b> ) делает текст только визуально курсивным, привлекая
          внимание, но не придавая особой важности. Например выделить термины в
          предложении.
        </p>
        <HealthyBox title="ИНТЕРЕСНО" text={data9} />
      </div>
    </>
  );
};
