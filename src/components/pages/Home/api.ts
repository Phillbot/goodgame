import { gg } from "../../../api";
import { get as getApi } from "../../../functions/api-calls";

const { baseUrlV2, streamList, gameList } = gg;

export const getAllStreamsFetchApi = async (page: number) => {
  const res = await getApi(`${baseUrlV2}${streamList}?page=${page}`);

  return res;
};

export const getAllGamesFetchApi = async (page: number) => {
  const res = await getApi(`${baseUrlV2}${gameList}?page=${page}`);

  return res;
};

export const getChannelDataFetchApi = async (channelKey: string) => {
  const res = await getApi(`${baseUrlV2}${streamList}/${channelKey}`);
  return res;
};
