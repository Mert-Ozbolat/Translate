import axios from "axios";


const api = axios.create({
    baseURL: "https://text-translator2.p.rapidapi.com",
    headers: {
        'x-rapidapi-key': '5a351d53c0msh396abe21c99b9dep13da85jsn9695451cf34e',
        'x-rapidapi-host': 'text-translator2.p.rapidapi.com',
        'Content-Type': 'application/x-www-form-urlencoded'
    },
})

export default api