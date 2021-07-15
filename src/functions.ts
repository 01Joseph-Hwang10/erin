
export const executeWithTimeout = (func: (...args: unknown[]) => unknown, timeout: number): Promise<unknown> => {
  return new Promise(
    (resolve) => {
      setTimeout(() => {
        resolve(func());
      }, timeout);
    }
  );
};
