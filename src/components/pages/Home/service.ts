import {
  getAllStreamsFetchApi,
  getAllGamesFetchApi,
  getChannelDataFetchApi,
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

  console.log(result);

  return {
    result: result ? Object.values(result._embedded)[0] : [],
    page_count: result && result.page_count,
    error: !result && true,
  };
};

export const getChannelDataFetch = async (channelKey: string) => {
  const result: any = await getChannelDataFetchApi(channelKey);

  console.log(result);

  return {
    result: result ? result : {},
    error: !result && true,
  };
};
