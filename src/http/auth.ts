import { $host } from "./index";

export const login = async (username: string, password: string) => {
  const bodyFormData = new FormData();
  bodyFormData.append("username", username);
  bodyFormData.append("password", password);

  const { data } = await $host.post(`/login`, bodyFormData);
  localStorage.setItem("token", data.access_token);
  return data;
};

export const register = async (username: string, password: string) => {
  const { data } = await $host.post(
    `/register?username=${username}&password=${password}`
  );
  return data;
};
