import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Input } from "@/components/common/inputs/Input";

describe("Input Component", () => {
  it("renders an input element", () => {
    render(<Input placeholder="Enter text" />);

    const input = screen.getByPlaceholderText("Enter text");

    expect(input).toBeInTheDocument();

    expect(input).toHaveClass(
      "flex h-10 w-full rounded-md border border-indigo-300 bg-transparent py-2 px-3 text-sm placeholder:text-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-indigo-700 dark:text-indigo-50 dark:focus:ring-indigo-400 dark:focus:ring-offset-indigo-900"
    );
  });

  it("accepts additional class names", () => {
    render(<Input placeholder="Enter text" className="custom-class" />);

    const input = screen.getByPlaceholderText("Enter text");

    expect(input).toHaveClass("custom-class");
  });

  it("handles input value changes", async () => {
    render(<Input placeholder="Enter text" />);

    const input = screen.getByPlaceholderText("Enter text");

    await userEvent.type(input, "Hello, world!");

    expect(input).toHaveValue("Hello, world!");
  });

  it("disables the input when 'disabled' is true", () => {
    render(<Input placeholder="Enter text" disabled />);

    const input = screen.getByPlaceholderText("Enter text");

    expect(input).toBeDisabled();
  });

  it("applies forwarded ref correctly", () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Input ref={ref} placeholder="Enter text" />);

    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
});
