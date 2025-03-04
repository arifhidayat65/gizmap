import api from '@/lib/axios';
import { BlogPost } from '@/types/blog';

export const getBlogPosts = () => {
  return api.get<BlogPost[]>('/blogs');
};


export const getBlogPostById = (id: string) => {
  return api.get<BlogPost>(`/blogs/${id}`);
};
