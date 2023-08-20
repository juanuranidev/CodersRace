const mantineThemeProvider = {
  defaultRadius: 6,
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
      },
    },
  },
  color: {
    "brand-primary": [
      "#c5211c",
      "#b11e19",
      "#9e1a16",
      "#8a1714",
      "#761411",
      "#63110e",
      "#4f0d0b",
      "#3b0a08",
      "#270706",
    ],
    "brand-tertiary": [
      "#f7ba79",
      "#dea76d",
      "#c69561",
      "#ad8255",
      "#947049",
      "#7c5d3d",
      "#634a30",
      "#4a3824",
      "#312518",
    ],
    "background-secondary": [
      "#fff6f7",
      "#e6ddde",
      "#ccc5c6",
      "#b3acad",
      "#999494",
      "#807b7c",
      "#666263",
      "#4c4a4a",
      "#333131",
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
  },
};

export default mantineThemeProvider;
