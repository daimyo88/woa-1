import React from "react";
import { screen } from "@testing-library/react";
import { render } from "../../../utils/test-utils";
import AnimePagination from "./AnimePagination";

describe("AnimePagination", () => {

    it("Should display when pages are > 0", () => {
        render(<AnimePagination pages={3} />);
        expect(
            screen.getByLabelText("pagination navigation")
        ).toBeInTheDocument();
    });

    it("Should not display when pages are 0", () => {
        render(<AnimePagination pages={0} />);
        expect(
            screen.queryByLabelText("pagination navigation")
        ).not.toBeInTheDocument();
    });

    it("Should not display when pages are <0", () => {
        render(<AnimePagination pages={-5} />);
        expect(
            screen.queryByLabelText("pagination navigation")
        ).not.toBeInTheDocument();
    });

    it("Should have correct amount of buttons", () => {
        render(<AnimePagination pages={5} />);
        expect(screen.getByText("1")).toBeInTheDocument();
        expect(screen.getByText("2")).toBeInTheDocument();
        expect(screen.getByText("3")).toBeInTheDocument();
        expect(screen.getByText("4")).toBeInTheDocument();
        expect(screen.getByText("5")).toBeInTheDocument(); 
    });

    it("Should display when pages are > 0", () => {
        render(<AnimePagination pages={3} />);
        expect(
            screen.getByLabelText("pagination navigation")
        ).toBeInTheDocument();
        screen.debug();
    });

});
