import { Box, Stack, Typography } from "@mui/material";
import { ClickIcon } from "../../public/images/icons/ClickIcon";

const Header = () => {
    return (
        <Stack justifyContent={"space-between"} direction={"row"}>
            <Box border="1px solid rgb(255, 255, 255)" padding="7px">
                <Typography
                    fontSize={"12px"}
                    fontWeight={400}
                    lineHeight={"112.68%"}
                    letterSpacing={0}
                    textTransform={"uppercase"}
                >
                    Покемоны API
                </Typography>
            </Box>

            <Stack direction={"row"} columnGap={"10px"}>
                <ClickIcon />
                <Typography
                    maxWidth={"112px"}
                    fontSize={"12px"}
                    fontWeight={600}
                    lineHeight={"100%"}
                    letterSpacing={0}
                >
                    Нажмите на нужное Покемона
                </Typography>
            </Stack>
        </Stack>
    );
};
export default Header;
