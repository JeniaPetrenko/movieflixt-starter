//код визначає фейковий обробник для тестування у справжньому сервері.
import { http, HttpResponse } from "msw";

export const handlers = [
  http.get(
    "https://api.themoviedb.org/3/discover/movie?api_key=7b35db62c2be9745bcb97ad14ebd2f35&include_adult=false&include_video=false&language=sv-SE&page=1&sort_by=popularity.desc",
    () => {
      // Note that you DON'T have to stringify the JSON!
      return HttpResponse.json({
        page: 1,
        results: [
          {
            adult: false,
            backdrop_path: "/3V4kLQg0kSqPLctI5ziYWabAZYF.jpg",
            genre_ids: [878, 28, 12],
            id: 912649,
            original_language: "en",
            original_title: "Venom: The Last Dance",
            overview:
              "Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision that will bring the curtains down on Venom and Eddie's last dance.",
            popularity: 5233.482,
            poster_path: "/aosm8NMQ3UyoBVpSxyimorCQykC.jpg",
            release_date: "2024-10-22",
            title: "Venom: The Last Dance",
            video: false,
            vote_average: 6.486,
            vote_count: 613,
          },
          {
            adult: false,
            backdrop_path: "/18TSJF1WLA4CkymvVUcKDBwUJ9F.jpg",
            genre_ids: [27, 53, 9648],
            id: 1034541,
            original_language: "en",
            original_title: "Terrifier 3",
            overview:
              "Five years after surviving Art the Clown's Halloween massacre, Sienna and Jonathan are still struggling to rebuild their shattered lives. As the holiday season approaches, they try to embrace the Christmas spirit and leave the horrors of the past behind. But just when they think they're safe, Art returns, determined to turn their holiday cheer into a new nightmare. The festive season quickly unravels as Art unleashes his twisted brand of terror, proving that no holiday is safe.",
            popularity: 5023.112,
            poster_path: "/63xYQj1BwRFielxsBDXvHIJyXVm.jpg",
            release_date: "2024-10-09",
            title: "Terrifier 3",
            video: false,
            vote_average: 7,
            vote_count: 818,
          },
          {
            adult: false,
            backdrop_path: "/v9acaWVVFdZT5yAU7J2QjwfhXyD.jpg",
            genre_ids: [16, 878, 10751],
            id: 1184918,
            original_language: "en",
            original_title: "The Wild Robot",
            overview:
              "After a shipwreck, an intelligent robot called Roz is stranded on an uninhabited island. To survive the harsh environment, Roz bonds with the island's animals and cares for an orphaned baby goose.",
            popularity: 3796.282,
            poster_path: "/wTnV3PCVW5O92JMrFvvrRcV39RU.jpg",
            release_date: "2024-09-12",
            title: "The Wild Robot",
            video: false,
            vote_average: 8.524,
            vote_count: 2643,
          },
        ],
        total_pages: 47046,
        total_results: 940906,
      });
    }
  ),
  // Обробник для запиту TV-шоу
  http.get(
    "https://api.themoviedb.org/3/discover/tv?api_key=7b35db62c2be9745bcb97ad14ebd2f35&include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc",
    () => {
      return HttpResponse.json({
        page: 1,
        results: [
          {
            adult: false,
            backdrop_path: "/aizbHLcKVWvJ7jxkflJzTu5Z8GE.jpg",
            genre_ids: [10766],
            id: 81329,
            origin_country: ["FR"],
            original_language: "fr",
            original_name: "Un si grand soleil",
            overview:
              "Claire is surprised when she gets arrested for the murder of her childhood friend after she returns to Montpellier.",
            popularity: 3402.077,
            poster_path: "/t6jVlbPMtZOJoAOfeoR4yQmnjXM.jpg",
            first_air_date: "2018-08-27",
            name: "Chronicles of the Sun",
            vote_average: 6.836,
            vote_count: 110,
          },
          {
            adult: false,
            backdrop_path: "/l7LRGYJY3NzIGBlpvHpMsNXHbm5.jpg",
            genre_ids: [10751, 35],
            id: 218145,
            origin_country: ["SK"],
            original_language: "sk",
            original_name: "Mama na prenájom",
            overview:
              "Abandoned by his wife, Martin is lying to his daughter not to be upset. But as Hanka grows, these lies become unbearable. Martin meets Nada unexpectedly, asked her to be a rent-a-mother and all lives are completely changed.",
            popularity: 3283.693,
            poster_path: "/fH7PP2Rkdlo414IHvZABBHhtoqd.jpg",
            first_air_date: "2023-01-09",
            name: "Mom for rent",
            vote_average: 5.5,
            vote_count: 32,
          },
        ],
        total_pages: 9270,
        total_results: 185396,
      });
    }
  ),
];
