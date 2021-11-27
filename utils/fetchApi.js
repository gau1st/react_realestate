import axios from "axios";

export const BASE_URL = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '1bf2b8308bmsha79378418794720p1fc92djsn35940e9348e4'
        }
    })

    return data;
}