import Axios, { Method } from "axios";

interface ApiProps<T = any> {
  url?: string;
  method?: Method;
  data?: T;
}

const callAPI = async ({ url, method, data }: ApiProps) => {
  const result = await Axios({
    url,
    method,
    data,
  });
  return result;
};

export default callAPI;
