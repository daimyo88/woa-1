import axios from "axios";

export default async function getAnime(id) {
    try {
        const anime = await axios
            .get(`${process.env.REACT_APP_API_URL}/anime/${id}/full`);
        return anime;
    } catch(e) {
        console.log(e)
    }
}