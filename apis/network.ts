import axios from "axios";

const eollugaUrl = "http://eolluga.com";

const eolluga = axios.create({
  baseURL: eollugaUrl,
  validateStatus: status => status < 500,
});

export default eolluga;
