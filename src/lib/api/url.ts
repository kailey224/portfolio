export const BLOG_CONTENTS = '/api/blog';

export const getPostData = (id: string) => `/api/blog/${id}`;

export const deletePostData = (id: string | undefined) => `/api/blog/${id}`;
