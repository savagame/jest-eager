import { render, screen } from "@testing-library/react";
import Hello from "./Day1_Hello";

test("render hello with name", () => {
  render(<Hello name="roberto" />);
  expect(screen.getByText(/hello, roberto/i)).toBeInTheDocument();
});
