import { $host, $authHost } from "./index";

export const getStatistic = async (
  limit: number,
  offset: number,
  sort: string
): Promise<any> => {
  let order = "";
  if (sort != "") {
  }
  const { data, headers } = await $authHost.get(
    `/statistics?offset=${offset * limit}&limit=${limit}` +
      (sort ? `&order=${sort}` : "")
  );
  console.log(headers);
  return { data, headers };
};
