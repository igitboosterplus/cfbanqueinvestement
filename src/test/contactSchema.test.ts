import { describe, it, expect } from "vitest";
import { contactSchema } from "@/lib/contactSchema";

describe("contactSchema", () => {
  const validData = {
    firstName: "Jean",
    lastName: "Dupont",
    email: "jean@example.com",
    company: "Acme Inc",
    subject: "Investment Banking",
    message: "I would like to learn more about your services and how you can help.",
  };

  it("accepts valid data", () => {
    const result = contactSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it("rejects empty first name", () => {
    const result = contactSchema.safeParse({ ...validData, firstName: "" });
    expect(result.success).toBe(false);
  });

  it("rejects invalid email", () => {
    const result = contactSchema.safeParse({ ...validData, email: "not-an-email" });
    expect(result.success).toBe(false);
  });

  it("rejects email exceeding 254 chars", () => {
    const longEmail = "a".repeat(250) + "@b.com";
    const result = contactSchema.safeParse({ ...validData, email: longEmail });
    expect(result.success).toBe(false);
  });

  it("rejects empty subject", () => {
    const result = contactSchema.safeParse({ ...validData, subject: "" });
    expect(result.success).toBe(false);
  });

  it("rejects short message (< 10 chars)", () => {
    const result = contactSchema.safeParse({ ...validData, message: "Hi" });
    expect(result.success).toBe(false);
  });

  it("rejects message exceeding 5000 chars", () => {
    const result = contactSchema.safeParse({ ...validData, message: "x".repeat(5001) });
    expect(result.success).toBe(false);
  });

  it("rejects first name with HTML/script injection", () => {
    const result = contactSchema.safeParse({ ...validData, firstName: "<script>alert(1)</script>" });
    expect(result.success).toBe(false);
  });

  it("accepts accented characters in names", () => {
    const result = contactSchema.safeParse({ ...validData, firstName: "François", lastName: "O'Brien-Müller" });
    expect(result.success).toBe(true);
  });

  it("allows empty company (optional)", () => {
    const result = contactSchema.safeParse({ ...validData, company: "" });
    expect(result.success).toBe(true);
  });
});
