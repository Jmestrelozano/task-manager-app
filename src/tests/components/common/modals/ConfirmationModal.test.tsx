import { render, screen, fireEvent } from "@testing-library/react";
import { ConfirmationModal } from "@/components/common/modals/ConfirmationModal";

const mockSetIsOpen = jest.fn();
const mockOnClick = jest.fn();

describe("ConfirmationModal", () => {
  const defaultProps = {
    isOpen: true,
    setIsOpen: mockSetIsOpen,
    title: "Are you sure you want to delete this item?",
    onClick: mockOnClick,
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly when open", () => {
    render(<ConfirmationModal {...defaultProps} />);

    expect(screen.getByText("Are you sure you want to delete this item?")).toBeInTheDocument();
    expect(screen.getByText("Delete")).toBeInTheDocument();
    expect(screen.getByText("Cancel")).toBeInTheDocument();
  });

  it("calls onClick handler when 'Delete' button is clicked", () => {
    render(<ConfirmationModal {...defaultProps} />);

    const deleteButton = screen.getByText("Delete");
    fireEvent.click(deleteButton);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("calls setIsOpen with false when 'Cancel' button is clicked", () => {
    render(<ConfirmationModal {...defaultProps} />);

    const cancelButton = screen.getByText("Cancel");
    fireEvent.click(cancelButton);

    expect(mockSetIsOpen).toHaveBeenCalledTimes(1);
    expect(mockSetIsOpen).toHaveBeenCalledWith(false);
  });

  it("does not render content when isOpen is false", () => {
    render(<ConfirmationModal {...defaultProps} isOpen={false} />);

    expect(screen.queryByText("Are you sure you want to delete this item?")).not.toBeInTheDocument();
  });
});
