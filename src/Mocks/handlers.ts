import { http, HttpResponse } from "msw";

export const handlers = [
  http.get(
    "/https://api.themoviedb.org/3/discover/movie?api_key=7b35db62c2be9745bcb97ad14ebd2f35&include_adult=false&include_video=false&language=sv-SE&page=1&sort_by=popularity.desc",
    () => {
      // Note that you DON'T have to stringify the JSON!
      return HttpResponse.json({
        user: {
          id: "abc-123",
          name: "John Maverick",
        },
      });
    }
  ),
];
