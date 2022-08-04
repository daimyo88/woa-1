import React, { FC } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import ClearIcon from "@mui/icons-material/Clear";

import FilterGenres from "../../inputs/FilterGenres/FilterGenres";
import FilterSelect from "../../inputs/FilterSelect/FilterSelect";
import FilterDate from "../../inputs/FilterDate/FilterDate";
import FilterSwitch from "../../inputs/FilterSwitch/FilterSwitch";

import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { searchOptionsSliceActions } from "../../../store/search-options-slice";
import { TYPE_OPTIONS } from "../../../constants/contstants";
import { RATING_OPTIONS } from "../../../constants/contstants";
import { STATUS_OPTIONS } from "../../../constants/contstants";

const AnimeFilters: FC = () => {
    const searchOptions = useAppSelector(state => state.searchOptions);
    const dispatch = useAppDispatch();
    const { type, rating, status, startDate, endDate, sfw } = searchOptions;

    const setFilter = (filter: "type" | "status" | "rating", value: string) => {
        dispatch(searchOptionsSliceActions.updateFilter({ filter, value }))
    };

    const updateDateFilter = (filter: "startDate" | "endDate", value: Date | null ) => {
        dispatch(searchOptionsSliceActions.updateDateFilter({ filter, value }))
    };

    const updateSfwFilter = (value: boolean ) => {
        dispatch(searchOptionsSliceActions.updateSfwFilter(value))
    };

    return (
        <Paper sx={{ mb: "5px", p: "15px" }}>
            <Grid container spacing={1}>
                <Grid item xs={12} sx={{ mb: "10px" }}>
                    <FilterGenres />
                </Grid>
                <Grid item xs={6} md={4} lg={2} sx={{ mb: "10px" }}>
                    <FilterSelect
                        title="Type"
                        value={type}
                        options={TYPE_OPTIONS}
                        changeHandler={(val) => setFilter("type", val)}
                    />
                </Grid>
                <Grid item xs={6} md={4} lg={3} sx={{ mb: "10px" }}>
                    <FilterSelect
                        title="Rating"
                        value={rating}
                        options={RATING_OPTIONS}
                        changeHandler={(val) => setFilter("rating", val)}
                    />
                </Grid>
                <Grid item xs={6} md={4} lg={2} sx={{ mb: "10px" }}>
                    <FilterSelect
                        title="Status"
                        value={status}
                        options={STATUS_OPTIONS}
                        changeHandler={(val) => setFilter("status", val)}
                    />
                </Grid>
                <Grid item xs={6} md={4} lg={1} sx={{ mb: "10px" }}>
                    <FilterSwitch
                        title="SFW"
                        value={sfw}
                        changeHandler={(val) => updateSfwFilter(val)}
                    />
                </Grid>
                <Grid item xs={6} md={4} lg={2} sx={{ mb: "10px" }}>
                    <FilterDate
                        title="Start year"
                        value={startDate}
                        changeHandler={(val) => updateDateFilter("startDate", val)}
                    />
                </Grid>
                <Grid item xs={6} md={4} lg={2} sx={{ mb: "10px" }}>
                    <FilterDate
                        title="End year"
                        value={endDate}
                        changeHandler={(val) => updateDateFilter("endDate", val)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Grid container justifyContent="center">
                        <Grid item>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() =>
                                    dispatch(searchOptionsSliceActions.resetFilters())
                                }
                                endIcon={<ClearIcon />}
                            >
                                Clear filters
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default AnimeFilters;