// eslint-disable-next-line import/no-extraneous-dependencies
import axios, { AxiosResponse } from 'axios';
import BLOG_CONTENTS from '@/lib/api/url';

const getBlogContents = async (): Promise<AxiosResponse> => {
  return axios.get(BLOG_CONTENTS);
};

export default getBlogContents;
