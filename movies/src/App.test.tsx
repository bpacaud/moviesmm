import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders elements of landing page", () => {
  render(<App />);
  const title = screen.getByText(/Movies/i);
  const search = screen.getByPlaceholderText(/Rechercher un film.../i);
  expect(title).toBeInTheDocument();
  expect(search).toBeInTheDocument();
});
