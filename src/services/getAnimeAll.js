import axios from "axios";

export default async function getAnimeALL({searchQuery, page, sort, genres, type, rating, status}) {
    try {
        const animeList = await axios
            .get(`${process.env.REACT_APP_API_URL}/anime?limit=24&q=${searchQuery}&page=${page}&genres=${genres}&type=${type}&rating=${rating}&status=${status}${sort}`);
        return animeList;
    } catch(e) {
        console.log(e)
    }
}