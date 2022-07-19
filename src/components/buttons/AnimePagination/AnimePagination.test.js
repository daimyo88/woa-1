import React from "react";
import { render, screen } from "@testing-library/react";
import { useState, createContext } from "react";
import AnimePagination from "./AnimePagination";

const AnimeListContext = createContext();

const AnimeListContextProvider = ({ children }) => {
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState(10);

    const dataState = {
        page,
        setPage,
        pages,
    };

    return (
        <AnimeListContext.Provider value={dataState}>
            {children}
        </AnimeListContext.Provider>
    );
};

describe("AnimePagination", () => {
    it("Should display when props ", () => {
        render(
            <AnimeListContextProvider>
                <AnimePagination />
            </AnimeListContextProvider>
        );
        screen.debug();
    });
});
