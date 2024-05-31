import { createTheme } from "@mui/material/styles";
import { COLOR } from "./src/constants";

export const light = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: "Roboto, sans-serif", // main font family
    fontSize: 14, // main font size
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: COLOR.DARK, // buttons background color
          color: COLOR.LIGHT, // button text color
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          backgroundColor: COLOR.LIGHT, // input background color
          color: COLOR.DARK, // input text color
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: COLOR.DARK, // icons color
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: COLOR.LIGHT, // Paper background color
          color: COLOR.DARK, // paper text color
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: COLOR.LIGHT, // navbar background color
          color: COLOR.DARK, // navbar text color
        },
      },
    },
  },
});

export const dark = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: "Roboto, sans-serif", // main font family
    fontSize: 14, // main font size
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: COLOR.LIGHT, // buttons background color
          color: COLOR.DARK, // button text color
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          backgroundColor: COLOR.LIGHT, // input background color
          color: COLOR.DARK, // input text color
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: COLOR.LIGHT, // icons color
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: COLOR.DARK, // paper background color
          color: COLOR.LIGHT, // paper text color
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: COLOR.DARK, // navbar background color
          color: COLOR.LIGHT, // navbar text color
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&.Mui-focused ": {
            borderColor: COLOR.WHITE, // outline color on focus
          },
        },
      },
    },
  },
});
