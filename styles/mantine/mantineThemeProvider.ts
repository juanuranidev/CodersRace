const mantineThemeProvider = {
  defaultRadius: 6,
  fontFamily: "Poppins, sans-serif",
  components: {
    Button: {
      variants: {
        cancel: (theme: any) => ({
          root: {
            backgroundColor: "#c5211c",
            color: theme.colors.red[0],
            ...theme.fn.hover({ backgroundColor: "#b11e19" }),
          },
        }),
        accept: () => ({
          root: {
            color: "white",
            backgroundColor: "#fca426",
            // ...theme.fn.hover({ backgroundColor: theme.colors.green[9] }),
          },
        }),
        primary: (theme: any) => ({
          root: {
            color: "white",
            backgroundColor: "#fc5d1b",
            ...theme.fn.hover({ backgroundColor: "#dc4202" }),
          },
        }),
        github: (theme: any) => ({
          root: {
            color: "#ffffff",
            backgroundColor: "#15141a",
            border: "0.15rem solid #c5c5c6",
            fontWeight: 500,
            ...theme.fn.hover({ backgroundColor: "#25252e" }),
          },
        }),
      },
    },
  },
  colors: {
    "brand-primary": [
      "#fc5d1b",
      "#e35418",
      "#ca4a16",
      "#b04113",
      "#973810",
      "#7e2f0e",
      "#65250b",
      "#4c1c08",
      "#321305",
    ],
    "text-primary": [
      "#f9f9f9",
      "#e0e0e0",
      "#c7c7c7",
      "#aeaeae",
      "#959595",
      "#7d7d7d",
      "#646464",
      "#4b4b4b",
      "#323232",
    ],
    "background-primary": [
      "#15141a",
      "#131217",
      "#111015",
      "#0f0e12",
      "#0d0c10",
      "#0b0a0d",
      "#08080a",
      "#060608",
      "#040405",
    ],
    "background-secondary": [
      "#2a2930",
      "#26252b",
      "#222126",
      "#1d1d22",
      "#19191d",
      "#151518",
      "#111013",
      "#0d0c0e",
      "#08080a",
    ],
  },
  background: {},
};

export default mantineThemeProvider;
