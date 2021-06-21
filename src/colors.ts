
interface ColorTypeInterface {
  primary: string,
  secondary: string,
  highlight: string,
  sharp: string,
}

interface ColorsInterface {
    DARK: ColorTypeInterface,
    LIGHT: ColorTypeInterface,
}

const COLORS: ColorsInterface = {
  DARK: {
    primary: "rgb(34, 40, 49)",
    secondary: "rgb(57, 62, 70)",
    highlight: "rgb(0, 173, 181)",
    sharp: "rgb(238, 238, 238)"
  },
  LIGHT: {
    primary: "rgb(249, 247, 247)",
    secondary: "rgb(219, 226, 239)",
    highlight: "rgb(63, 114, 175)",
    sharp: "rgb(17, 45, 78)"
  }
};


export default COLORS;
