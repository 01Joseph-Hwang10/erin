
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
  if ( inputString === null || inputString === undefined ) {
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

export const hexToRgbComponents = (hex: string): {
  r: number,
  g: number,
  b: number
} | null =>  {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
};

export const insertOpacity = (rgb: string, opacity: number): string => {
  const rgbComponents = rgb
    .replace(" ", "")
    .replace("rgb", "")
    .replace("(", "")
    .replace(")", "")
    .split(",");
  return `rgba( ${rgbComponents[0]}, ${rgbComponents[1]}, ${rgbComponents[2]}, ${opacity} )`;
};

