import axios from "axios";
import ContactData from "../models/contactData";

export default async function sendMessage(values: ContactData, errorHandler: (status: boolean) => void) {
    let emailApiEndpoint: string = process.env.REACT_APP_EMAIL_ENDPOINT!;
    try {
        const response = await axios.post(emailApiEndpoint, {values});
        return response;
    } catch(e) {
        errorHandler(true);
    }
}