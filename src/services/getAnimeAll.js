import axios from "axios";

export default async function getAnimeALL({searchQuery}) {
    try {
        const animeList = await axios
            .get(`${process.env.REACT_APP_API_URL}/anime?limit=24&q=${searchQuery}`);
        return animeList;
    } catch(e) {
        console.log(e)
    }
}