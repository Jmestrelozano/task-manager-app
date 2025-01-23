import "@testing-library/jest-dom";

global.ResizeObserver = jest.fn().mockImplementation((callback) => {
    return {
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    };
  });

  beforeEach(() => {
    const sessionStorageMock = (() => {
      let store: Record<string, string> = {};
  
      return {
        getItem: (key: string) => store[key] || null,
        setItem: (key: string, value: string) => {
          store[key] = value.toString();
        },
        removeItem: (key: string) => {
          delete store[key];
        },
        clear: () => {
          store = {};
        },
      };
    })();
  
    Object.defineProperty(window, "sessionStorage", {
      value: sessionStorageMock,
    });
  });
  