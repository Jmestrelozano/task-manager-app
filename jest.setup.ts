import "@testing-library/jest-dom";

global.ResizeObserver = jest.fn().mockImplementation((callback) => {
    return {
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    };
  });