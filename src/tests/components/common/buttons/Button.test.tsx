import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "@/components/common/buttons/Button";

describe("Button Component", () => {
  it("renders the button with default styles", () => {
    render(<Button>Click me</Button>);

    const button = screen.getByRole("button", { name: "Click me" });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("h-10 py-2 px-4"); // Default size
    expect(button).toHaveClass("bg-indigo-900 text-white hover:bg-indigo-700"); // Default variant
  });

  it("applies the 'outline' variant styles correctly", () => {
    render(<Button variant="outline">Click me</Button>);

    const button = screen.getByRole("button", { name: "Click me" });
    expect(button).toHaveClass(
      "bg-transparent border border-indigo-200 hover:bg-indigo-100"
    );
  });

  it("applies the 'sm' size styles correctly", () => {
    render(<Button size="sm">Click me</Button>);

    const button = screen.getByRole("button", { name: "Click me" });
    expect(button).toHaveClass("h-9 px-2 rounded-md");
  });

  it("applies custom classes correctly", () => {
    render(<Button className="custom-class">Click me</Button>);

    const button = screen.getByRole("button", { name: "Click me" });
    expect(button).toHaveClass("custom-class");
  });

  it("is clickable and triggers the onClick handler", async () => {
    const onClickMock = jest.fn();
    render(<Button onClick={onClickMock}>Click me</Button>);

    const button = screen.getByRole("button", { name: "Click me" });
    await userEvent.click(button);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it("is disabled when the 'disabled' prop is passed", () => {
    render(<Button disabled>Click me</Button>);

    const button = screen.getByRole("button", { name: "Click me" });
    expect(button).toBeDisabled();
    expect(button).toHaveClass("disabled:pointer-events-none disabled:opacity-50");
  });
});
