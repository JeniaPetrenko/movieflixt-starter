//код визначає інтерфейс ITVshows, який містить
// властивості id, overview, poster_path,
// release_date, title

export interface ITVshow {
  id: number;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  first_air_date: string;
  name: string;
  vote_average: number;
}
