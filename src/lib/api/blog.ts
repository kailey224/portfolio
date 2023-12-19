import axios, { AxiosResponse } from 'axios';
import { BLOG_CONTENTS, getPostData } from '@/lib/api/url';

export const getBlogContents = async (): Promise<AxiosResponse> => {
  return axios.get(BLOG_CONTENTS);
};

export const getBlogContent = async (id: string): Promise<AxiosResponse> => {
  return axios.get(getPostData(id));
};
