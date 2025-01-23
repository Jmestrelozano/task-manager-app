import { render, screen } from "@testing-library/react";
import { Label } from "@/components/common/labels/Label";

describe("Label Component", () => {
  it("renders correctly with default props", () => {
    render(<Label>Default Label</Label>);

    const label = screen.getByText("Default Label");
    expect(label).toBeInTheDocument();
    expect(label).toHaveClass("text-sm font-medium leading-none");
  });

  it("applies additional class names", () => {
    render(<Label className="custom-class">Styled Label</Label>);

    const label = screen.getByText("Styled Label");
    expect(label).toHaveClass("custom-class");
  });

  it("passes props correctly to the root element", () => {
    render(<Label htmlFor="test-input">Label with Props</Label>);

    const label = screen.getByText("Label with Props");
    expect(label).toHaveAttribute("for", "test-input");
  });

  it("disables interactivity when the associated peer is disabled", () => {
    render(<Label className="peer-disabled">Disabled Label</Label>);

    const label = screen.getByText("Disabled Label");
    expect(label).toHaveClass("peer-disabled:cursor-not-allowed");
    expect(label).toHaveClass("peer-disabled:opacity-70");
  });
});
