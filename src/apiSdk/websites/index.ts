import axios from 'axios';
import queryString from 'query-string';
import { WebsiteInterface, WebsiteGetQueryInterface } from 'interfaces/website';
import { GetQueryInterface } from '../../interfaces';

export const getWebsites = async (query?: WebsiteGetQueryInterface) => {
  const response = await axios.get(`/api/websites${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createWebsite = async (website: WebsiteInterface) => {
  const response = await axios.post('/api/websites', website);
  return response.data;
};

export const updateWebsiteById = async (id: string, website: WebsiteInterface) => {
  const response = await axios.put(`/api/websites/${id}`, website);
  return response.data;
};

export const getWebsiteById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/websites/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteWebsiteById = async (id: string) => {
  const response = await axios.delete(`/api/websites/${id}`);
  return response.data;
};
