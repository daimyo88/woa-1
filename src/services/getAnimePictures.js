import axios from "axios";

export default async function getAnimePictures(id, errorHandler) {
    try {
        const anime = await axios.get(`${process.env.REACT_APP_API_URL}/anime/${id}/pictures`);
        return anime;
    } catch(e) {
        errorHandler(true);
    }
}