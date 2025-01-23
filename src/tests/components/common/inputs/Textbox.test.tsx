import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Textbox } from "@/components/common/inputs/Textbox";
import { UseFormRegisterReturn } from "react-hook-form";

describe("Textbox Component", () => {
   const mockRegister: UseFormRegisterReturn = {
     onChange: jest.fn(),
     onBlur: jest.fn(),
     ref: jest.fn(),
     name: "name",
   };
 

  it("renders a label if provided", () => {
    render(
      <Textbox
        type="text"
        placeholder="Enter text"
        label="Name"
        name="name"
        register={mockRegister}
      />
    );

    const label = screen.getByText("Name");
    expect(label).toBeInTheDocument();
    expect(label).toHaveAttribute("for", "name");
  });

  it("renders an input with correct attributes", () => {
    render(
      <Textbox
        type="text"
        placeholder="Enter text"
        name="name"
        register={mockRegister}
      />
    );

    const input = screen.getByPlaceholderText("Enter text");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "text");
    expect(input).toHaveAttribute("name", "name");
  });

  it("applies the provided className", () => {
    render(
      <Textbox
        type="text"
        placeholder="Enter text"
        name="name"
        register={mockRegister}
        className="custom-class"
      />
    );

    const input = screen.getByPlaceholderText("Enter text");
    expect(input).toHaveClass("custom-class");
  });

  it("displays an error message when an error is provided", () => {
    render(
      <Textbox
        type="text"
        placeholder="Enter text"
        name="name"
        register={mockRegister}
        error="This field is required"
      />
    );

    const errorMessage = screen.getByText("This field is required");
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveClass("text-[#f64949fe]");
  });

  it("sets `aria-invalid` to true when there is an error", () => {
    render(
      <Textbox
        type="text"
        placeholder="Enter text"
        name="name"
        register={mockRegister}
        error="This field is required"
      />
    );

    const input = screen.getByPlaceholderText("Enter text");
    expect(input).toHaveAttribute("aria-invalid", "true");
  });

  it("sets `aria-invalid` to false when there is no error", () => {
    render(
      <Textbox
        type="text"
        placeholder="Enter text"
        name="name"
        register={mockRegister}
      />
    );

    const input = screen.getByPlaceholderText("Enter text");
    expect(input).toHaveAttribute("aria-invalid", "false");
  });

  it("handles user input correctly", async () => {
    render(
      <Textbox
        type="text"
        placeholder="Enter text"
        name="name"
        register={mockRegister}
      />
    );

    const input = screen.getByPlaceholderText("Enter text");
    await userEvent.type(input, "Hello World");
    expect(input).toHaveValue("Hello World");
  });
});
