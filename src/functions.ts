
export const executeWithTimeout = (func: (...args: unknown[]) => unknown, timeout: number): Promise<unknown> => {
  return new Promise(
    (resolve) => {
      setTimeout(() => {
        resolve(func());
      }, timeout);
    }
  );
};

export const camelCaseToNormal = (inputString: string | null): string | null => {
  if ( inputString === null ) {
    return null;
  }
  if (/^[a-zA-Z0-9]+$/.test(inputString)) {
    return inputString.split("").reduce(
      (acc, cur, idx) => {
        if (idx === 0) {
          return acc + cur.toUpperCase();
        }
        if (cur === cur.toUpperCase()) {
          return acc + " " + cur;
        }
        return acc + cur;
      },
      ""
    );
  }
  return inputString;
};
