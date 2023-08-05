export type Project = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  owner: {
    login: string;
  };
};
