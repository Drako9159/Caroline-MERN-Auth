import axios from "axios";

const API = "http://localhost:3000/api";

export async function registerRequest(user) {
  return await axios.post(`${API}/register`, user);
}
