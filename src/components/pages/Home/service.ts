import {
  getAllStreamsFetchApi,
  getAllGamesFetchApi,
  getChannelDataFetchApi,
  getGameDataFetchApi,
} from "./api";

export const getAllStreamsFetch = async (page: number) => {
  const result: any = await getAllStreamsFetchApi(page);

  return {
    result: result ? Object.values(result._embedded)[0] : [],
    page_count: result && result.page_count,
    error: !result && true,
  };
};

export const getAllGamesFetch = async (page: number) => {
  const result: any = await getAllGamesFetchApi(page);

  return {
    result: result ? Object.values(result._embedded)[0] : [],
    page_count: result && result.page_count,
    error: !result && true,
  };
};

export const getChannelDataFetch = async (channelKey: string) => {
  const result: any = await getChannelDataFetchApi(channelKey);

  return {
    result: result ? result : {},
    error: !result && true,
  };
};

export const getGameDataFetch = async (game: string) => {
  const result: any = await getGameDataFetchApi(game);

  return {
    result: result ? result : {},
    error: !result && true,
  };
};
