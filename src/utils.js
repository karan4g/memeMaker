import axios, { isCancel, AxiosError } from "axios";
import { MEME_URL } from "@/constant";

export function generateUrl(path) {
  return MEME_URL + path;
}

export function apiReq(endPoint, data, method, header) {
  return new Promise((resolve, reject) => {
    let headers = {
      ...header,
      // partner_key: PARTNER_KEY,
      // Authorization: SHOP_KEY,
      // 'Access-Control-Allow-Origin': 'http://localhost:3009'
    };

    if (header === null) {
      headers = {};
    }

    // const accessToken = getData(AccessTokenId);

    // if (accessToken) {
    //     headers = {
    //         ...headers,
    //         // Authorization: `${accessToken}`
    //     }
    // }

    if (method == "get" || method == "delete") {
      data = {
        params: data,
        headers,
      };
    }

    axios[method](endPoint, data, { headers })
      .then(({ data, status: httpStatus }) => {
        // const { code } = data;
        if (httpStatus === 200 || httpStatus === 201) {
          return resolve(data);
        }

        return reject(data);
      })
      .catch((err) => {
        // if (err.response && err.response.status === 429) {
        //     alert(err && err.response && err.response.data && err.response.data.message || 'Too many requests. Try again in a few minutes')
        // }
        return reject(err);
      });
  });
}

export function apiPost(endPoint, data, headers = {}) {
  return apiReq(generateUrl(endPoint), data, "post", headers);
}

export function apiDelete(endPoint, data, headers = {}) {
  return apiReq(generateUrl(endPoint), data, "delete", headers);
}

export function apiGet(endPoint, data, headers = {}) {
  return apiReq(generateUrl(endPoint), data, "get", headers);
}

export function apiPut(endPoint, data, headers = {}) {
  return apiReq(generateUrl(endPoint), data, "put", headers);
}
