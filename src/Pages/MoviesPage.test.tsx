import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";

//Importera MoviesPage component...
import { MoviesPage } from "./MoviesPage";

//тест beforeEach рендерить сторінку перед кожним тестом
beforeEach(() => render(<MoviesPage />));

//перевіряє наявність заголовка з текстом "Populära Filmer"
describe("MoviesPage component", () => {
  it("should have a heading with the text Populära Filmer", () => {
    screen.getByRole("heading", { name: /filmer$/i });
  });

  //тестирує відображення зображення для кожного фільму, імітує виклик api
  describe("MoviesPage REST API call", () => {
    it("should display image for each movie", async () => {
      const images = await screen.findAllByRole("img");
      expect(images).toHaveLength(2);

      //@ts-expect-error: ignore alt problem...
      const altTitles = images.map((elem) => elem.alt);
      expect(altTitles).toEqual(["Venom: the Last Dance", "Terrifier 3"]);
    });
  });
});

/* Код створює компоненти MoviesPage і HomePage для рендерингу відповідних
 сторінок з фільмами та домашньої сторінки. Тести перевіряють, що компоненти 
 правильно рендерять заголовки і, що MoviesPage виконує запит до API та
 відображає зображення для кожного фільму.
*/
