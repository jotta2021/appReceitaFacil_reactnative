import axios from "axios";

/* rodar com ipv4 : json-server --watch -d 180 --host 192.168.3.37  db.json */

const api = axios.create({
    baseURL: 'http://192.168.3.37:3000'
})

export default api;