import axios from "axios";

const getSearchID = () => {
    const { data } = axios.get('https://front-test.beta.aviasales.ru/search')
    return data
}

const getTickets = (searchID) => {
    const { data } = axios.get(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchID}`);
    return data
}

export { getSearchID, getTickets }