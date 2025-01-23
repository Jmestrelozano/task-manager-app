import { SkeletonTask } from "@/components/common/loaders/SkeletonTask";
import { render, screen } from "@testing-library/react";


describe("SkeletonTask", () => {
  it("should render a container with 6 skeleton cards", () => {
    render(<SkeletonTask />);

    // Verifica que el contenedor principal exista
    const container = screen.getByTestId("skeleton-task-container");
    expect(container).toBeInTheDocument();

    // Verifica que se renderizan 6 skeleton cards
    const skeletonCards = screen.getAllByRole("article");
    expect(skeletonCards).toHaveLength(6);
  });

  it("should render each skeleton card with the correct structure", () => {
    render(<SkeletonTask />);

    const skeletonCards = screen.getAllByRole("article");

    skeletonCards.forEach((card) => {
      // Verifica que cada card tenga un círculo grande (avatar)
      expect(card.querySelector(".w-6.h-6.bg-gray-300.rounded-full")).toBeInTheDocument();

      // Verifica que cada card tenga una línea corta (nombre)
      expect(card.querySelector(".w-24.h-4.bg-gray-300.rounded")).toBeInTheDocument();

      // Verifica que cada card tenga un círculo pequeño
      expect(card.querySelector(".w-4.h-4.bg-gray-300.rounded-full")).toBeInTheDocument();

      // Verifica que cada card tenga una línea más larga
      expect(card.querySelector(".w-48.h-4.bg-gray-300.rounded")).toBeInTheDocument();

      // Verifica que cada card tenga un borde inferior
      expect(card.querySelector(".py-4.border-t.border-gray-200")).toBeInTheDocument();

      // Verifica que cada card tenga una línea corta dentro del borde inferior
      expect(card.querySelector(".w-20.h-4.bg-gray-300.rounded")).toBeInTheDocument();
    });
  });
});
