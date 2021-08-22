import axios from 'axios';
import { startLoading, stopLoading } from 'store/loading/actions';
import { createToast } from 'store/toasts/actions';

export const CALL_API = 'CALL_API';

type Params = { [key: string]: any };

/**
 * Create params for axios
 * @param params
 */
const createParams = (params?: Params) => {
  if (!params) return undefined;

  return { params };
};

const getApi: any = (input: { api: string; params?: Params }) => {
  const { api, params } = input;
  return axios.get(api, createParams(params));
};

const postApi: any = (input: { api: string; data: any; params?: Params }) => {
  const { api, data, params } = input;
  return axios.post(api, data, createParams(params));
};

const putApi: any = (input: { api: string; data: any; params?: Params }) => {
  const { api, data, params } = input;
  return axios.put(api, data, createParams(params));
};

const deleteApi: any = (input: { api: string; data?: any; params?: Params }) => {
  const { api, data, params } = input;
  return axios.delete(api, { data, params });
};

const mappingApi: any = {
  get: getApi,
  post: postApi,
  put: putApi,
  delete: deleteApi,
};

export type ApiInputType = {
  method: 'get' | 'post' | 'put' | 'delete';
  api: string;
  body?: any;
  loading?: boolean;
  params?: Params;
  hideToast?: boolean;
};

export type ApiOutputType = {
  code: number;
  status: 'success' | 'error';
  message?: string;
  data?: any;
};

export const callApiAction = (payload: ApiInputType, callback?: (result: ApiOutputType) => void) => {
  const { method, api, body, loading, params } = payload;
  let result: ApiOutputType = { code: 500, status: 'error' };

  return async (dispatch: any) => {
    if (loading) dispatch(startLoading());
    try {
      const response = await mappingApi[method]({ api, data: body, params });
      const data = response.data;
      result = {
        code: data.code,
        status: data.message.status,
        message: data.message.text,
        data: data.data,
      };
      dispatch({ type: CALL_API, payload: result });
    } catch (err) {
      console.log(err);
    }
    // Show toast if call api error or api is not get
    dispatch(
      createToast({
        message: result.message || 'Something went wrong, please try again!',
        type: result.status,
      }),
    );
    callback?.(result);
    if (loading) dispatch(stopLoading());
  };
};
