//визначаємо компонент Item, який відображає інфо про один фільм у вигляді картки.
import { IMovie } from "../Models/IMovie";
import { ITVshow } from "../Models/ITVshow";

import styles from "./item.module.css";

interface ItemProps {
  movie?: IMovie;
  tvShow?: ITVshow;
}

//компонент отримує один обєкт фільму через пропс movie, типізований за допомогую IMovie
export const Item = ({ movie, tvShow }: ItemProps) => {
  const item = movie || tvShow;

  if (!item) return null; // Якщо немає ні `movie`, ні `tvShow`, не відображаємо компонент

  //url зображення//-
  const img: string = `http://image.tmdb.org/t/p/w500${item?.poster_path}`;

  // Вибираємо правильний заголовок і дату для фільму або ТВ-шоу
  const title = movie ? movie.title : tvShow?.name;
  const date = movie ? movie.release_date : tvShow?.first_air_date;
  //відображаємо картку з зображенням, заголовком �� датою//-
  //якщо обидва змінні відсутні, відображаємо пустий елемент заголовка//-
  //та відображаємо пустий елемент дати//-
  return (
    <section className={styles.card}>
      <img src={img} alt={title} />
      <div className={styles["card-body"]}>
        <h5>{title}</h5>
        <small className={styles["text-muted"]}>{date}</small>
      </div>
    </section>
  );
};
