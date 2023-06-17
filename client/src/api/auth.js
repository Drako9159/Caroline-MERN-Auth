import axios from "./axios";

export async function registerRequest(user) {
  return await axios.post(`/register`, user);
}

export async function loginRequest(user) {
  return await axios.post(`/login`, user);
}

export async function verifyTokenRequest(){
  return await axios.get("/auth/verify")
}
