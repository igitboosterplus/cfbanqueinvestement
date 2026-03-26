import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ErrorBoundary from "@/components/ErrorBoundary";

function Thrower(): JSX.Element {
  throw new Error("test error");
}

function GoodChild() {
  return <div>All good</div>;
}

describe("ErrorBoundary", () => {
  it("renders children when there is no error", () => {
    render(
      <MemoryRouter>
        <ErrorBoundary>
          <GoodChild />
        </ErrorBoundary>
      </MemoryRouter>
    );
    expect(screen.getByText("All good")).toBeTruthy();
  });

  it("renders fallback UI when a child throws", () => {
    // Suppress console.error from React for this test
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});
    render(
      <MemoryRouter>
        <ErrorBoundary>
          <Thrower />
        </ErrorBoundary>
      </MemoryRouter>
    );
    expect(screen.getByText("Something went wrong")).toBeTruthy();
    expect(screen.getByText("Refresh Page")).toBeTruthy();
    expect(screen.getByText("Return Home")).toBeTruthy();
    spy.mockRestore();
  });
});
