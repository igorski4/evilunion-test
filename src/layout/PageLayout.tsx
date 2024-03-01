import { Box, useMediaQuery, useTheme } from "@mui/material";
import { ReactNode } from "react";

type PageLayoutProps = {
    children: ReactNode;
};

const PageLayout = ({ children }: PageLayoutProps) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Box
            maxWidth={"lg"}
            height={"calc(100vh - 200px)"}
            sx={{ px: isMobile ? 2 : 3, py: isMobile ? 2 : 5 }}
            mx={"auto"}
        >
            {children}
        </Box>
    );
};
export default PageLayout;
