import { render, screen, waitFor } from "@testing-library/react";
import Loader from "./Day4_Loader";

test("Loader shows Loading then Done", async () => {
  render(<Loader />);
  expect(screen.getByText("Loading...")).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByText("Done!")).toBeInTheDocument();
  });
});

// jest.useFakeTimers();

// test("Loader shows Loading then Done", () => {
//   render(<Loader />);
//   expect(screen.getByText("Loading...")).toBeInTheDocument();
//   jest.advanceTimersByTime(600);
//   expect(screen.getByText("Done!")).toBeInTheDocument();
// });
