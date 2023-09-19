import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import OurProcess from "./OurProcess";

describe("OurProcess", () => {
  it("must be this text", () => {
    render(<OurProcess></OurProcess>);
    expect(screen.getByText("Discussion & Planning")).toBeInTheDocument();
  });
});
