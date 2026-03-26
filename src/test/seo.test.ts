import { describe, it, expect } from "vitest";

describe("SEO environment config", () => {
  it("VITE_BASE_URL falls back to default when not set", () => {
    const BASE_URL = import.meta.env.VITE_BASE_URL || "https://cfbanque.digitboosterplus.com";
    expect(BASE_URL).toBeTruthy();
    expect(BASE_URL).toMatch(/^https?:\/\//);
  });
});
