import React, { useState, useEffect, FC } from "react";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { Paper } from "@mui/material";

import { ANIME_SINGLE_TABS } from "../constants/contstants";

import AnimeTabs from "../components/navigations/AnimeTabs/AnimeTabs";
import GoBackButtons from "../components/buttons/GoBackButtons/GoBackButtons";
import PageTitle from "../components/text/PageTitle/PageTitle";
import AnimeInfo from "../components/dataDisplay/AnimeInfo/AnimeInfo";
import RelatedInfo from "../components/dataDisplay/RelatedInfo/RelatedInfo";
import AnimeGallery from "../components/dataDisplay/AnimeGallery/AnimeGallery";
import ExternalLinksInfo from "../components/dataDisplay/ExternalLinksInfo/ExternalLinksInfo";
import AnimeInfoLoader from "../components/loaders/AnimeInfoLoader/AnimeInfoLoader";
import ErrorMessage from "../components/messages/ErrorMessage/ErrorMessage";

import { useGetAnimeQuery } from "../services/anime";

const Anime: FC = () => {
    const [tab, setTab] = useState(0);
    let params = useParams();

    const { data, isLoading, error } = useGetAnimeQuery(params.id);

    const anime = data?.data;

    useEffect(() => {
        window.scrollTo({ top: 0 });
        return () => {
            return;
        };
    }, []);

    useEffect(() => {
        setTab(0);
        window.scrollTo({ top: 0 });
        return () => {
            return;
        };
    }, [params.id]);

    return (
        <>
            <GoBackButtons />
            {!isLoading && error && <ErrorMessage text="API error :(" />}
            {isLoading && !error && <AnimeInfoLoader />}
            {!isLoading && !error && anime && (
                <>
                    <PageTitle text={anime.title} />
                    <Grid container sx={{ my: "20px" }}>
                        <Grid item sm={4} xs={12} sx={{ textAlign: "center" }}>
                            <img
                                src={anime?.images?.jpg?.large_image_url}
                                alt={anime.title}
                            />
                        </Grid>
                        <Grid
                            item
                            sm={8}
                            xs={12}
                            sx={(theme) => ({
                                pl: "50px",
                                [theme.breakpoints.down("md")]: {
                                    pl: "30px",
                                },
                                [theme.breakpoints.down("sm")]: {
                                    mt: "10px",
                                    pl: "0",
                                },
                            })}
                        >
                            <AnimeTabs
                                value={tab}
                                changeHandler={setTab}
                                options={ANIME_SINGLE_TABS}
                            />
                            <Paper sx={{ mt: "15px", p: "15px" }}>
                                {tab === 0 && (
                                    <AnimeInfo
                                        synopsis={anime?.synopsis}
                                        genres={anime?.genres}
                                        rating={anime?.rating}
                                        aired={anime?.aired?.string}
                                        status={anime?.status}
                                        type={anime?.type}
                                        score={anime?.score}
                                    />
                                )}
                                {tab === 1 && (
                                    <RelatedInfo items={anime?.relations} />
                                )}
                                {tab === 2 && (
                                    <AnimeGallery id={anime?.mal_id} />
                                )}
                                {tab === 3 && (
                                    <ExternalLinksInfo
                                        items={anime?.external}
                                        originalUrl={anime?.url}
                                    />
                                )}
                            </Paper>
                        </Grid>
                    </Grid>
                </>
            )}
        </>
    );
}

export default Anime;