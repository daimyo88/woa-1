import axios from "axios";

export default async function getAnimeALL() {
    try {
        const anime = await axios.get(process.env.REACT_APP_API_URL + '/anime');
        return anime;
    } catch(e) {
        console.log(e)
        return e.message;
    }
}