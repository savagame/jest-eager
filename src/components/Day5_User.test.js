import { render, screen } from "@testing-library/react";
import User from "./Day5_User";

afterEach(() => {
  jest.resetAllMocks();
});

// 🌀 1. loading is shown first
test("shows loading before fetch resolves", () => {
  global.fetch = jest.fn().mockResolvedValue({
    json: () => Promise.resolve({ name: "reberto" }),
  });

  render(<User />);
  expect(screen.getByText("Loading...")).toBeInTheDocument();
});

// ✅ 2. success case
test("shows user on success", async () => {
  global.fetch = jest.fn().mockResolvedValue({
    json: () => Promise.resolve({ name: "roberto" }),
  });

  render(<User />);
  expect(await screen.findByText("roberto")).toBeInTheDocument();
});

// ❌ 3. error case
test("shows error when fetch fails", async () => {
  global.fetch = jest.fn().mockRejectedValue(new Error("API fail"));

  render(<User />);
  expect(await screen.findByText("Error loading user")).toBeInTheDocument();
});

// 🌀 4. empty user case
test("handles empty user object", async () => {
  global.fetch = jest.fn().mockResolvedValue({
    json: () => Promise.resolve({}),
  });

  render(<User />);
  expect(await screen.findByText("No user found")).toBeInTheDocument();
});

// 🛠️ 5. endpoint default check
test("uses default /api/user endpoint", async () => {
  global.fetch = jest.fn().mockResolvedValue({
    json: () => Promise.resolve({ name: "roberto" }),
  });

  render(<User />);
  expect(global.fetch).toHaveBeenCalledWith("/api/user");
});
