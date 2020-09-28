import axios from 'axios';

axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

const api = axios.create({
    baseURL: 'http://192.168.0.99:71/GLOBAL/Controller/GTPP/',
    method: 'POST',
    contentType: 'application/json',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials' : true,
        'Access-Control-Allow-Headers':'application/json',
        'Content-Type': 'application/json',
    },
})
export default api;

