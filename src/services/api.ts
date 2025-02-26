import api from '@/lib/axios';
import { Podcast } from '@/types/podcast';
import { BlogPost } from '@/types/blog';

export const getPodcasts = () => {
  return api.get<Podcast[]>('/podcasts');
};

export const getBlogPosts = () => {
  return api.get<BlogPost[]>('/blogs');
};

export const getPodcastById = (id: string) => {
  return api.get<Podcast>(`/podcasts/${id}`);
};

export const getBlogPostById = (id: string) => {
  return api.get<BlogPost>(`/blogs/${id}`);
};
