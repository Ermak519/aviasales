import axios from 'axios';

const getSearchID = async () => {
  // const { data } = await axios.get('https://front-test.beta.aviasales.ru/search');
  const { data } = await axios.get('https://aviasales-test-api.java-mentor.com/search');

  return data;
};

const getTickets = async (searchID) => {
  // const { data } = await axios.get(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchID}`);
  const { data } = await axios.get(`https://aviasales-test-api.java-mentor.com/tickets?searchId=${searchID}`);
  return data;
};

export { getSearchID, getTickets };
