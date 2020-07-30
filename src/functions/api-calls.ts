import axios from "axios";

export const get = async (url: string, options: object = {}) => {
  try {
    const result = await axios(url, options);
    const { data } = result;

    if (!data.trace) {
      return data.result || data;
    } else {
      return data.trace;
    }
  } catch (error) {
    console.error(error.message);
  }
};
