import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import { PokeAPI } from "pokeapi-types";

type PokemonCardProps = {
    activePokemon: PokeAPI.Pokemon;
};

const PokemonCard = ({ activePokemon }: PokemonCardProps) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const findAttack = () => {
        return activePokemon?.stats.find((el) => el.stat.name === "attack")
            ?.base_stat;
    };

    return (
        <Box
            padding={isMobile ? "16px" : "44px"}
            sx={{ background: "rgb(0, 0, 0)" }}
            width={isMobile ? "calc(100% - 32px)" : "50%"}
        >
            <Typography
                fontSize="48px"
                fontWeight="700"
                lineHeight="100%"
                letterSpacing="0%"
                color="rgb(160, 160, 160)"
                mb={"44px"}
            >
                {activePokemon.name}
            </Typography>
            <Box
                width={"100%"}
                height={"200px"}
                position={"relative"}
                mb={"44px"}
            >
                <Image
                    src={activePokemon.sprites.front_default}
                    layout="fill"
                    objectFit="contain"
                    alt={activePokemon.name}
                />
            </Box>
            <Stack>
                <Typography
                    fontSize="17px"
                    fontWeight="400"
                    lineHeight="150%"
                    letterSpacing="0%"
                    color="rgb(160, 160, 160)"
                >
                    Снялся в {activePokemon.moves.length} сериях
                </Typography>
                <Typography
                    fontSize="17px"
                    fontWeight="400"
                    lineHeight="150%"
                    letterSpacing="0%"
                    color="rgb(160, 160, 160)"
                >
                    Id: {activePokemon.id}
                </Typography>
                <Typography
                    fontSize="17px"
                    fontWeight="400"
                    lineHeight="150%"
                    letterSpacing="0%"
                    color="rgb(160, 160, 160)"
                >
                    height: {activePokemon.height}
                </Typography>
                <Typography
                    fontSize="17px"
                    fontWeight="400"
                    lineHeight="150%"
                    letterSpacing="0%"
                    color="rgb(160, 160, 160)"
                >
                    attack: {findAttack()}
                </Typography>
            </Stack>
        </Box>
    );
};
export default PokemonCard;
