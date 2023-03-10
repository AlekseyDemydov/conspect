import s from '../../StyleBox.module.scss';
import { HealthyBox } from 'comp/utils/HealthyBox';
import { data1 } from './data/P10';

export const P110 = () => {
  return (
    <>
      <div className={s.boxInfo}>
        <h1>Оформление кода</h1>
        <br />
        <p>
          В процессе работы над созданием веб-сайтов всегда необходимо
          возвращаться к уже написанному коду для внесения правок. В подавляющем
          большинстве проектов больше чем один разработчик. Если код не оформлен
          согласно стандартам - он теряет читабельность и, как следствие,
          скорость разработки падает.
        </p>
        <HealthyBox title='ПОЛЕЗНО'
        text={data1}
        />
      </div>
    </>
  );
};
