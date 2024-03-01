import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    typography: {
        fontFamily: ["Raleway", "sans-serif"].join(","),
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 700,
            md: 900,
            lg: 1280,
            xl: 1920,
        },
    },

    components: {
        MuiChip: {
            styleOverrides: {
                colorPrimary: {
                    backgroundColor: "rgb(25, 134, 236)",
                    padding: "20px",
                    borderRadius: "44px",
                    fontSize: "20px",
                    fontWeight: 400,
                    lineHeight: "100%",
                    letterSpacing: "0",
                    margin: 0,
                    minHeight: "60px",
                    "& .MuiChip-label": {
                        padding: 0,
                        overflow: "visible",
                    },
                },
            },
        },
    },
});

export default theme;
