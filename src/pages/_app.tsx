import { AppProps } from "next/app";
import React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { GlobalStyles, ThemeProvider } from "@mui/material";
import "@fontsource/raleway/400.css";
import "@fontsource/raleway/600.css";
import "@fontsource/raleway/700.css";
import theme from "../styles/theme";
import { globalStyle } from "../styles/globalStyle";

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
                <GlobalStyles styles={{ ...globalStyle }} />
                <Component {...pageProps} />
            </ThemeProvider>
        </AppRouterCacheProvider>
    );
};

export default MyApp;
