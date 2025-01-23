import { render, screen } from "@testing-library/react";
import { Title } from "@/components/home/task/Title";

describe("Title Component", () => {
  it("renders the title text", () => {
    render(<Title title="Test Title" />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });

  it("applies custom className correctly", () => {
    render(<Title title="Custom Title" className="text-red-500" />);
    const titleElement = screen.getByText("Custom Title");
    expect(titleElement).toHaveClass("text-red-500");
  });

  it("renders default title when title is empty", () => {
    render(<Title title="" />);
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("");
  });
});
