import axios from "axios";

export default async function getAnimeGenres() {
    try {
        const genresList = await axios
            .get(`${process.env.REACT_APP_API_URL}/genres/anime`);
        return genresList;
    } catch(e) {
        console.log(e)
    }
}