import { render, screen, fireEvent } from "@testing-library/react";
import { SelectList } from "@/components/home/task/SelectList";
import { UseFormRegisterReturn } from "react-hook-form";

describe("SelectList Component", () => {
  const mockLists = ["Option 1", "Option 2", "Option 3"];
  const mockSetSelected = jest.fn();

  const mockRegister: UseFormRegisterReturn = {
    onChange: jest.fn(),
    onBlur: jest.fn(),
    ref: jest.fn(),
    name: "",
  };

  afterEach(() => {
    mockSetSelected.mockClear();
  });

  it("renders the SelectList component", () => {
    render(
      <SelectList
        lists={mockLists}
        selected="Option 1"
        setSelected={mockSetSelected}
        label="Select an option"
        register={mockRegister}
      />
    );

    // Check if label is rendered
    expect(screen.getByText("Select an option")).toBeInTheDocument();
    // Check if the selected option is displayed in the button
    expect(screen.getByText("Option 1")).toBeInTheDocument();
  });

  it("opens the Listbox when clicked", () => {
    render(
      <SelectList
        lists={mockLists}
        selected="Option 1"
        setSelected={mockSetSelected}
        label="Select an option"
        register={mockRegister}
      />
    );

    // Click the button to open the Listbox
    fireEvent.click(screen.getByRole("button"));

    // Check if the options are rendered
    mockLists.forEach((_) => {
      expect(screen.getAllByRole("option")).toHaveLength(3);
    });
  });
});
