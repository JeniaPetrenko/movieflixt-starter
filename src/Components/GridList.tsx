//імпортуємо IMovie - інтерфейс, який описує структуру фільму
import { IMovie } from "../Models/IMovie";
import { ITVshow } from "../Models/ITVshow";

import styles from "./gridlist.module.css";
import { Item } from "./Item";

interface GridListProps {
  movies?: IMovie[]; // Робимо movies опціональним
  tvShows?: ITVshow[]; // Додаємо опціональний масив для tvShows
}

//визначаємо компонент GridList, який приймає масив фільмів і відображає їч у вигляді сітки
export const GridList = ({ movies = [], tvShows = [] }: GridListProps) => {
  const items = [...movies, ...tvShows];

  return (
    <section className={styles.grid}>
      {items.length > 0 ? (
        items.map((item) => (
          <Item
            key={item.id}
            movie={"title" in item ? item : undefined}
            tvShow={"name" in item ? item : undefined}
          />
        ))
      ) : (
        <p>No items available.</p>
      )}
    </section>
  );
};
//За допомогою методу map кожен елемент масиву фільмів (movie) передається
//компоненту Item. Для кожного фільму створюється картка за допомогою компонента Item.
//Важливо: кожному компоненту Item передається ключ key={movie.id}.
//Це необхідно для ефективного відображення списків у React, оскільки ключі
// допомагають React відстежувати елементи під час оновлення компонента.
