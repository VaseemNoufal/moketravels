import axios from "axios";


export const talrop = axios.create({
    baseURL: "https://traveller.talrop.works/api/v1"
})