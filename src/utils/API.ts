import defaultsDeep from 'lodash-es/defaultsDeep';

export const fetchData = (url: string, options: any = {}) => {
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  };
  return fetch(url, defaultsDeep(options, {
    headers,
  }));
};

export const fetchAuthData = (url: string, options: any = {}) => {
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`
  };
  return fetch(url, defaultsDeep(options, {
    headers,
  }));
};
