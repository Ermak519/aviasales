import axios from "axios";

const getSearchID = async () => {
    const { data } = await axios.get('https://front-test.beta.aviasales.ru/search')
    return data
}

const getTickets = async (searchID) => {
    const { data } = await axios.get(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchID}`);
    return data
}

export { getSearchID, getTickets }