import { render, screen, fireEvent } from "@testing-library/react";
import { Tabs } from "@/components/home/task/Tabs";
import { TabPanel } from "@headlessui/react";

const tabs = [
  { title: "Tab 1", icon: "🔥" },
  { title: "Tab 2", icon: "⚡" },
];

const children = [
  <TabPanel key="tab1">Content of Tab 1</TabPanel>,
  <TabPanel key="tab2">Content of Tab 2</TabPanel>,
];

describe("Tabs Component", () => {
  const mockSetSelected = jest.fn();

  beforeEach(() => {
    render(
      <Tabs tabs={tabs} setSelected={mockSetSelected}>
        {children}
      </Tabs>
    );
  });

  afterEach(() => {
    mockSetSelected.mockClear();
  });
  it("should render all tab titles", () => {
    expect(screen.getByText("Tab 1")).toBeInTheDocument();
    expect(screen.getByText("Tab 2")).toBeInTheDocument();
  });

  it("should switch tabs when clicked", () => {
    const tab1 = screen.getAllByRole("tab")[0];
    const tab2 = screen.getAllByRole("tab")[1];

    expect(tab1).toHaveClass("text-blue-700");
    expect(tab2).toHaveClass("text-gray-800");

    fireEvent.click(tab2);

    expect(mockSetSelected).toHaveBeenCalledWith(1);
    expect(tab1).toHaveClass("text-gray-800");
    expect(tab2).toHaveClass("text-blue-700");
  });

  it("should display the correct content based on the selected tab", () => {
    expect(screen.getByText("Content of Tab 1")).toBeInTheDocument();
    expect(screen.queryByText("Content of Tab 2")).not.toBeInTheDocument();

    fireEvent.click(screen.getByText("Tab 2"));

    expect(screen.getByText("Content of Tab 2")).toBeInTheDocument();
    expect(screen.queryByText("Content of Tab 1")).not.toBeInTheDocument();
  });

  it("should call setSelected when a tab is clicked", () => {
    fireEvent.click(screen.getByText("Tab 1"));

    expect(mockSetSelected).toHaveBeenCalledWith(0);

    fireEvent.click(screen.getByText("Tab 2"));

    expect(mockSetSelected).toHaveBeenCalledWith(1);
  });
});
