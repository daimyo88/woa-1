import axios from "axios";

export default async function sendMessage(values, errorHandler) {
    try {
        console.log(values);
        const response = await axios.post(process.env.REACT_APP_EMAIL_ENDPOINT, {values});
        return response;
    } catch(e) {
        errorHandler(true);
    }
}