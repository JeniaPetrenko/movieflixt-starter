import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";

import { TvshowsPage } from "./TVshowsPage";

beforeEach(() => render(<TvshowsPage />));

describe("TVshowsPage component", () => {
  it("should have a heading with the text Populära TV-Show", () => {
    screen.getByRole("heading", { name: /tv-show$/i });
  });

  describe("TVshowsPage REST API call", () => {
    it("should  display image for each  TV-Show", async () => {
      const images = await screen.findAllByRole("img");
      expect(images).toHaveLength(2);

      //@ts-expect-error: ignore alt problem...
      const altTVnames = images.map((elem) => elem.alt);
      expect(altTVnames).toEqual(["Chronicles of the Sun", "Mom for rent"]);
    });
  });
});
