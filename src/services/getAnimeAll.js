import axios from "axios";

export default async function getAnimeALL() {
    try {
        const animeList = await axios.get(process.env.REACT_APP_API_URL + '/anime?limit=24');
        return animeList;
    } catch(e) {
        console.log(e)
        return e.message;
    }
}