export type Project = {
  id: number;
  name: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  codeUrl?: string;
  documentationLink?: string;
};
