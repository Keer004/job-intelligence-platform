import axios from "axios";

const API_URL = "http://localhost:8080/api/jobs";


export const getJobs = async () => {

    const response = await axios.get(API_URL);

    return response.data;
};


export const searchJobs = async (title) => {

    const response = await axios.get(`${API_URL}/search`, {
        params: {
            title: title
        }
    });

    return response.data;
};