import React, { FC } from "react";
import Typography from "@mui/material/Typography";
//import StyledTooltip from "../StyledTooltip/StyledTooltip";
import AdditionalInfo from "../AdditionalInfo/AdditionalInfo";
import Tooltip from "@mui/material/Tooltip";

interface Genre {
    name: string
}

interface AnimeHoverDescriptionProps {
    title: string;
    synopsis: string;
    genres: string[];
    rating: string;
    aired: string;
}

const AnimeHoverDescription: FC<AnimeHoverDescriptionProps> = ({
    title,
    synopsis,
    genres,
    rating,
    aired,
    children,
}) => {
    const synopsisArr = synopsis?.split(".") || [];
    let shortDescpription = "";

    synopsisArr.forEach((sentence: string, i: number) => {
        if (i < 2) {
            shortDescpription += sentence + ".";
        }
    });

    if (shortDescpription) {
        shortDescpription += "..";
    }

    const genresArr = genres?.map((genre: any) => genre.name);

    return (
        <Tooltip
            enterDelay={300}
            enterNextDelay={300}
            disableTouchListener={true}
            arrow
            title={
                <div style={{ maxWidth: "350px", padding: "10px 5px" }}>
                    <Typography color="secondary" variant="h3">
                        {title}
                    </Typography>
                    {shortDescpription && (
                        <Typography paragraph color="text.primary">
                            {shortDescpription}
                        </Typography>
                    )}
                    {!!genresArr.length && (
                        <AdditionalInfo
                            label="Genres: "
                            text={genresArr.join(", ")}
                        />
                    )}
                    {rating && (
                        <AdditionalInfo
                            color="secondary"
                            label="Rating: "
                            text={rating}
                        />
                    )}
                    {aired && <AdditionalInfo label="Aired: " text={aired} />}
                </div>
            }
            placement="left"
        >
            <div>
                {children}
            </div>
        </Tooltip>
    );
};

export default AnimeHoverDescription;
