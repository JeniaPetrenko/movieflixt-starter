import { http, HttpResponse } from "msw";

export const handlers = [
  http.get(
    "/https://api.themoviedb.org/3/discover/movie?api_key=7b35db62c2be9745bcb97ad14ebd2f35&include_adult=false&include_video=false&language=sv-SE&page=1&sort_by=popularity.desc",
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
          {
            adult: false,
            backdrop_path: "/2fxnTXr8NwyTFkunkimJkGkhqfy.jpg",
            genre_ids: [18, 28, 27],
            id: 1118031,
            original_language: "es",
            original_title: "Apocalipsis Z: el principio del fin",
            overview:
              "When a kind of rabies that transforms people into aggressive creatures spreads across the planet, Manel isolates himself at home with his cat, relying on his wits to survive; but soon they must go out in search of food, by land and by sea, dodging many dangers.",
            popularity: 3868.781,
            poster_path: "/wIGJnIFQlESkC2rLpfA8EDHqk4g.jpg",
            release_date: "2024-10-04",
            title: "Apocalypse Z: The Beginning of the End",
            video: false,
            vote_average: 6.914,
            vote_count: 324,
          },
        ],
        total_pages: 47046,
        total_results: 940906,
      });
    }
  ),
];
