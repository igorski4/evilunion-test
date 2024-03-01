import { Stack, useMediaQuery, useTheme } from "@mui/material";
import PageLayout from "../layout/PageLayout";
import { GetStaticProps } from "next";
import { PokeAPI } from "pokeapi-types";
import { useState } from "react";
import { fetcher } from "../api/fetcher";
import PokemonCard from "../components/PokemonCard";
import PokemonChips from "../components/PokemonChips";
import Header from "../layout/Header";

type HomeProps = {
    pokemons: PokeAPI.NamedAPIResourceList;
};

const Home = ({ pokemons }: HomeProps) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const [activePokemon, setActivePokemon] = useState<PokeAPI.Pokemon>();

    return (
        <PageLayout>
            <Stack rowGap={"54px"}>
                <Header />
                <Stack
                    columnGap={"12px"}
                    rowGap={"24px"}
                    direction={isMobile ? "column" : "row"}
                >
                    <PokemonChips
                        pokemons={pokemons}
                        activePokemon={activePokemon}
                        setActivePokemon={setActivePokemon}
                    />

                    {activePokemon && (
                        <PokemonCard activePokemon={activePokemon} />
                    )}
                </Stack>
            </Stack>
        </PageLayout>
    );
};
export default Home;

export const getStaticProps: GetStaticProps = async () => {
    const res = fetcher("pokemon?limit=10");
    const pokemons: PokeAPI.NamedAPIResourceList = await res;

    return {
        props: {
            pokemons,
        },
    };
};
