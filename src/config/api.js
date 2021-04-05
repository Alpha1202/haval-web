import axios from 'axios'


export const apiUrl = process.env.REACT_APP_API_URL


export const apiRequest = async (endpoint, method = 'get', body = {}, contentType = 'application/json') => {
  try {
    const url = `${apiUrl}${endpoint}`
    const request = await axios.request(url, {
      data: method === 'get' ? null : body,
      method: method.toUpperCase(),
      headers: {
        //Authorization: token ? `Bearer ${JSON.parse(token)}` : null,
        'Content-Type': contentType,
      },
    })
    return request
  } catch (error) {
    console.log(error, 'catch error');
    if(error.response) {
      return error.response
    }
  }
}