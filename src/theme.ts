import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles: {
    global: (props: any) => ({
      body: {
        color: props.colorMode === "dark" ? "gray.400" : "white",
      },
      ".sidebar": {
        bg:
          props.colorMode === "dark"
            ? "#1A1A1A"
            : "linear-gradient(180deg, #1FA8C9 0.16%, rgba(0, 0, 0, 0.70) 220.71%)",
        color: props.colorMode === "dark" ? "gray.300" : "white",
      },
      ".header": {
        bg: props.colorMode === "dark" ? "#2D2D2D" : "white",
        color: props.colorMode === "dark" ? "gray.300" : "gray.800",
      },
      ".content": {
        bg: props.colorMode === "dark" ? "#2C2C2C" : "white",
        color: props.colorMode === "dark" ? "gray.400" : "gray.800",
      },
    }),
  },
  fonts: {
    heading: "Saira, sans-serif",
    body: "Saira, sans-serif",
  },
  colors: {
    text: {
      light: "white",
      dark: "gray.300",
    },
  },
});

export default theme;
