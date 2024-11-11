import { beforeEach, describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { HomePage } from "./HomePage";
beforeEach(() => render(<HomePage />));
describe("HomePage component", () => {
  it("should have a heading with the text MovieFlix", () => {
    screen.getByRole("heading", { name: /MovieFlix/i });
  });
});
