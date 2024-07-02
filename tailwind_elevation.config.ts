const tailwindElevationConfig = {
  theme: {
    extend: {
      boxShadow: {
        "elevation-light-1":
          "0 1px 3px 1px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.3)",
        "elevation-light-2":
          "0 2px 6px 2px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.3)",
        "elevation-dark-1":
          "0 1px 2px rgba(0, 0, 0, 0.3), 0 1px 3px 1px rgba(0, 0, 0, 0.15)",
        "elevation-dark-2":
          "0 1px 2px rgba(0, 0, 0, 0.3), 0 2px 6px 2px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  variants: {},
  plugins: [],
};

export default tailwindElevationConfig;
