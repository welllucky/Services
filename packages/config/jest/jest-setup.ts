import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";

// wellington.braga verificar a solução abaixo e ver se achamos uma melhor

window.matchMedia =
  window.matchMedia ||
  (() => {
    return {
      matches: false,
      addListener: () => jest.fn(),
      removeListener: () => jest.fn(),
    };
  });

afterEach(() => {
  jest.useRealTimers();
});

jest.setTimeout(30000);
