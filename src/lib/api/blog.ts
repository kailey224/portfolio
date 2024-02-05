import axios, { AxiosResponse } from 'axios';
import { BLOG_CONTENTS, getPostData, deletePostData } from '@/lib/api/url';
import { BlogContentsProps } from './dto';

export const getBlogContents = async (): Promise<AxiosResponse> => {
  return axios.get(BLOG_CONTENTS);
};

export const getBlogContent = async (id: string): Promise<AxiosResponse> => {
  return axios.get(getPostData(id));
};

export const postBlogContent = async (
  data: BlogContentsProps
): Promise<AxiosResponse> => {
  return axios.post(BLOG_CONTENTS, data);
};

export const updateBlogContent = async (
  data: BlogContentsProps
): Promise<AxiosResponse> => {
  return axios.put(BLOG_CONTENTS, data);
};

export const deleteBlogContent = async (
  id: string | undefined
): Promise<AxiosResponse> => {
  return axios.delete(deletePostData(id));
};
