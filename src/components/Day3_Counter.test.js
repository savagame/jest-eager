import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Day3_Counter";

test("renders initial count as 0", () => {
  render(<Counter />);
  expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
});

test("renders count when button is clicked", () => {
  render(<Counter />);
  const button = screen.getByRole("button", { name: /Increment/i });
  fireEvent.click(button);
  expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();
});
