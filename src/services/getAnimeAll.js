import axios from "axios";

export default async function getAnimeALL({searchQuery, page, sort, genres}) {
    try {
        const animeList = await axios
            .get(`${process.env.REACT_APP_API_URL}/anime?limit=24&q=${searchQuery}&page=${page}&genres=${genres}${sort}`);
        return animeList;
    } catch(e) {
        console.log(e)
    }
}