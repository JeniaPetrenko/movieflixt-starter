//визначаємо компонент Item, який відображає інфо про один фільм у вигляді картки.
import { IMovie } from "../Models/IMovie";

import styles from "./item.module.css";

//компонент отримує один обєкт фільму через пропс movie, типізований за допомогую IMovie
export const Item = ({ movie }: { movie: IMovie }) => {
  const img: string = `http://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <section className={styles.card}>
      <img src={img} alt={movie.title} />
      <div className={styles["card-body"]}>
        <h5>{movie.title}</h5>
        <small className={styles["text-muted"]}>{movie.release_date}</small>
      </div>
    </section>
  );
};
