//імпортуємо IMovie - інтерфейс, який описує структуру фільму
import { IMovie } from "../Models/IMovie";

import styles from "./gridlist.module.css";
import { Item } from "./Item";

//визначаємо компонент GridList, який приймає масив фільмів і відображає їч у вигляді сітки
export const GridList = ({ movies }: { movies: IMovie[] }) => {
  return (
    <section className={styles.grid}>
      {movies && movies.length > 0 ? (
        movies.map((movie: IMovie) => <Item key={movie.id} movie={movie} />)
      ) : (
        <p>No movies available.</p>
      )}
    </section>
  );
};
//За допомогою методу map кожен елемент масиву фільмів (movie) передається
//компоненту Item. Для кожного фільму створюється картка за допомогою компонента Item.
//Важливо: кожному компоненту Item передається ключ key={movie.id}.
//Це необхідно для ефективного відображення списків у React, оскільки ключі
// допомагають React відстежувати елементи під час оновлення компонента.
