import { render, screen } from "@testing-library/react";
import Greeting from "./Day2_Greeting";

test("renders Good evening when isMorning is false", () => {
  render(<Greeting isMorning={false} />);
  expect(screen.getByText(/Good evening/i)).toBeInTheDocument();
});

test("renders Good morning when isMorning is true", () => {
  render(<Greeting isMorning={true} />);
  expect(screen.getByText(/Good morning/i)).toBeInTheDocument();
});
