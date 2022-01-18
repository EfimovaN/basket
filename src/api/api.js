import axios from "axios";

export const getProducts = () => {
    return axios.get('https://run.mocky.io/v3/59f47e8e-2a09-48c3-8a1d-0af8e5817f7c')
        .then(response => {
            const data = JSON.parse(response.data);
            // console.log(data);
            return data;

        });
}

