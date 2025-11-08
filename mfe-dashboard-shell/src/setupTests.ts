import '@testing-library/jest-dom';

// Mock de fetch global para las pruebas
const mockFetch = jest.fn();
global.fetch = mockFetch as unknown as typeof fetch;

// Configuraciones adicionales de testing-library
const originalError = console.error;
beforeAll(() => {
  // Opcional: Suprimir advertencias específicas de React
  console.error = (...args) => {
    if (
      /Warning: ReactDOM.render is no longer supported in React 18/.test(args[0]) ||
      /Warning: validateDOMNesting/.test(args[0])
    ) {
      return;
    }
    originalError.call(console, ...args);
  };
});

afterAll(() => {
  console.error = originalError;
});
