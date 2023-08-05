import { QueryFunction } from '@tanstack/query-core/src';

type Project = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  owner: {
    login: string;
  };
};

export const getProjects: QueryFunction<Project[]> = async () => {
  const response = await fetch('https://api.github.com/users/marcin10lw/repos');

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};
