import config from '../config';

const handleResponse = response => response.text().then((text) => {
  const data = text && JSON.parse(text);
  return data;
});

const api = ({
  endpoint, method, data,
}) => fetch(`${config.BASE_URL}${endpoint}`, {
  method,
  headers: {
    'content-type': 'application/json',
    Authorization: config.API_KEY,
  },
  body: JSON.stringify(data),
}).then(handleResponse);

export default api;

