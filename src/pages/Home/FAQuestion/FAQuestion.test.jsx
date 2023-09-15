import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import FAQuestion from "./FAQuestion";
describe("FAQuestion", () => {
  it("must be this text", () => {
    render(<FAQuestion></FAQuestion>);
    expect(
      screen.getByText("What is a revenue generation platform?")).toBeInTheDocument();
  });
});
