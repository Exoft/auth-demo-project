import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { AuthDispatchContext, AuthStateContext } from "../src/context/context";
import { AppRouter } from "../src/components/";
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest";
import { createMemoryHistory } from "history";
import App from "../src/App";

const mockedFillipData = { user: { id: 1, name: "Fillip" }, loading: false, token: "mock-auth-token" };

describe("Protected routes testing for authorized user", () => {
  const history = createMemoryHistory();
  beforeEach(() => {
    return render(
      <MemoryRouter initialEntries={["/home"]} >
        <AuthStateContext.Provider value={mockedFillipData}>
          <AuthDispatchContext.Provider value={vi.fn()}>
            <AppRouter />
          </AuthDispatchContext.Provider>
        </AuthStateContext.Provider>
      </MemoryRouter>
    );
  });
  afterEach(() => {
    cleanup();
  });

  test("Protected route must be available for authorized user", () => {
    expect(screen.getByText(`Hi, ${mockedFillipData.user.name}!`)).toBeDefined();
  });

  test("User should be redirected to the Login page after clicking 'Logout' button", async () => {
    const logoutButton = screen.getByText("Logout");

    fireEvent.click(logoutButton);

    expect(history.location.pathname).toBe("/");
  });
});

describe("Protected routes testing for unauthorized user", () => {
    const history = createMemoryHistory();

  test("Unauthorized users cannot reach the Home page and must be redirected to the Login page", () => {
    render(<App />);
    history.push('/home')
    expect(screen.getByText("Login")).toBeDefined();
  });
});
