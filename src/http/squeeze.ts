import { $host, $authHost } from "./index";

export const squeeze = async (link: string) => {
  const { data } = await $authHost.post(`/squeeze?link=${link}`);
  return data;
};
