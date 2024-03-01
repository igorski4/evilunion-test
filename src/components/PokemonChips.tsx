import { Box, Chip, Grid, useMediaQuery, useTheme } from "@mui/material";
import { PokeAPI } from "pokeapi-types";
import { fetcher } from "../api/fetcher";
import { Dispatch, SetStateAction } from "react";

type PokemonChipsProps = {
    pokemons: PokeAPI.NamedAPIResourceList;
    activePokemon: PokeAPI.Pokemon | undefined;
    setActivePokemon: Dispatch<SetStateAction<PokeAPI.Pokemon | undefined>>;
};

const PokemonChips = ({
    pokemons,
    activePokemon,
    setActivePokemon,
}: PokemonChipsProps) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const handleClickChip = async (name: string) => {
        if (activePokemon?.name === name) return;
        const res = fetcher(`/pokemon/${name}`);
        const pokemon: PokeAPI.Pokemon = await res;
        setActivePokemon(pokemon);
    };

    return (
        <Box maxWidth={isMobile ? "100%" : "50%"}>
            <Grid spacing={"10px"} maxWidth={"100%"} container>
                {pokemons.results?.map((el) => (
                    <Grid item key={el.name}>
                        <Chip
                            label={el.name}
                            color="primary"
                            onClick={() => handleClickChip(el.name)}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};
export default PokemonChips;
