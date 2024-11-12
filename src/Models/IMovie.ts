//код визначає інтерфейс IMovie, який містить властивості id, overview, poster_path,
// release_date, title
export interface IMovie {
  id: number;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
}
