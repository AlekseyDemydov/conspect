import { HealthyBox } from 'comp/utils/HealthyBox';
import { Copy } from 'comp/utils/Test';
import s from '../../StyleBox.module.scss';
import { data1, data2, data3, data4, data5 } from './data/P24';

export const P24 = () => {
  return (
    <>
      <div className={s.boxInfo}>
        <h1>Видео и аудио</h1>
        <br />
        <p>
          До HTML5 разметка видео и аудио была сложной задачей. В современном
          стандарте добавили новые теги для разметки медиаконтента с поддержкой
          различных форматов, встроенными элементами управления и т. д.
        </p>

        <h2>Видео</h2>
        <br />
        <p>
          Для разметки видеоконтента используется парный тег{' '}
          <span className={s.tag}>video</span>.
        </p>
        <Copy text={data1} />
        <br />
        <p>Разберём атрибуты.</p>
        <ul className={s.font}>
          <li>
            <span className={s.tag}>src</span> - указывает адрес видеофайла
          </li>
          <li>
            <span className={s.tag}>poster</span> - адрес изображения, которое
            используется как постер если видео не загружено или еще не
            проигрывается
          </li>
          <li>
            {' '}
            <span className={s.tag}>width</span> и{' '}
            <span className={s.tag}>height</span> - задают высоту и ширину как у
            изображения
          </li>
          <li>
            {' '}
            <span className={s.tag}>controls</span> - атрибут-флаг, если
            присутствует - добавляются элементы управления видео
          </li>
          <li>
            {' '}
            <span className={s.tag}>autoplay</span> - атрибут-флаг, если
            присутствует - проигрывание видео начинается как только оно доступно
          </li>
          <li>
            {' '}
            <span className={s.tag}>loop</span> - атрибут-флаг, если присуствует
            - видео будет повторяться в цикле
          </li>
        </ul>
        <h3>Форматы видео</h3>
        <br />
        <p>
          Загружать лишь один формат видеофайла недостаточно, некоторые браузеры
          могут его не поддерживать, и пользователь не сможет посмотреть видео.
          Есть несколько популярных видеоформатов которые необходимо
          предоставить браузеру на выбор: <span className={s.tag}>webm</span>,{' '}
          <span className={s.tag}>mp4</span> и{' '}
          <span className={s.tag}>ogg</span>.
        </p>
        <p>
          Для этого убираем атрибут <span className={s.tag}>src</span> у тега{' '}
          <span className={s.tag}>&lt;video&gt;</span> и добавляем новый тег{' '}
          <span className={s.tag}>&lt;source&gt;</span> для каждого формата. В
          атрибуте <span className={s.tag}>src</span> указываем адрес
          видеофайла, а в атрибуте <span className={s.tag}>type</span>{' '}
          видеоформат. Браузер выберет из списка первый, который поддерживает и
          загрузит его, проигнорировав остальные.
        </p>
        <Copy text={data2} />
        <br />
        <HealthyBox
          title="ИНТЕРЕСНО"
          text="Конвертация видео и аудио в необходимые форматы это задача создателя контента, контент-менеджера или, в крайнем случае, разработчика."
        />
        <br />
        <h2>Аудио</h2>
        <br />
        <p>
          Для разметки аудиоконтента используется парный тег{' '}
          <span className={s.tag}>&lt;audio&gt;</span>. Его использование очень
          похоже на <span className={s.tag}>&lt;video&gt;</span>, но можно
          задать меньше атрибутов.
        </p>
        <Copy text={data3} />
        <br />
        <p>Разберём атрибуты.</p>
        <ul className={s.font}>
          <li>
            <span className={s.tag}>src</span> - указывает адрес аудиофайла
          </li>
          <li>
            <span className={s.tag}>controls</span> - атрибут-флаг, если
            присутствует - добавляются элементы управления аудио
          </li>
          <li>
            {' '}
            <span className={s.tag}>autoplay</span> - атрибут-флаг, если
            присутствует - проигрывание аудио начинается как только оно доступно
          </li>
          <li>
            {' '}
            <span className={s.tag}>loop</span> - атрибут-флаг, если присуствует
            - аудио будет повторяться в цикле
          </li>
        </ul>
        <p>
          Атрибут <span className={s.tag}>preload</span> указывает режим
          предварительной загрузки аудиофайла. Его значение влияет на то, какая
          иформация будет загружена. Значение по умолчанию зависит от браузера,
          в котором была открыта веб-страница.
        </p>
        <ul className={s.font}>
          <li>
            <span className={s.tag}>none</span> - не загружать аудио заранее
          </li>
          <li>
            <span className={s.tag}>metadata</span> - азагрузить служебную
            информацию (длительность и т. п.)
          </li>
          <li>
            {' '}
            <span className={s.tag}>auto</span> - заранее загружать весь
            аудиофайл
          </li>
        </ul>
        <h3>Форматы аудио</h3>
        <br />
        <p>
          С поддержкой форматов в браузере у аудио ситуация лучше. Все
          современные браузеры гарантированно поддерживают один из двух
          форматов: <span className={s.tag}>mp3</span> или{' '}
          <span className={s.tag}>ogg</span>.
        </p>
        <p>
          Как и в случае с видео, убираем атрибут{' '}
          <span className={s.tag}>src</span> и используем тег{' '}
          <span className={s.tag}>&lt;source&gt;</span> с атрибутами{' '}
          <span className={s.tag}>src</span> и{' '}
          <span className={s.tag}>type</span>.
        </p>
        <Copy text={data4} />
        <br />
        <h2>Поддержка старых браузеров</h2>
        <br />
        <p>
          Если браузер очень старый и не поддерживает HTML5 медиаконтент, нужно
          сказать об этом пользователю. Для этого внутри тегов{' '}
          <span className={s.tag}>&lt;video&gt;</span> или{' '}
          <span className={s.tag}>&lt;audio&gt;</span>, после всех тегов{' '}
          <span className={s.tag}>&lt;source&gt;</span> добавим строку текста,
          которую браузер отобразит, если не поддерживает медиаконтент.
        </p>
        <Copy text={data5} />
      </div>
    </>
  );
};
