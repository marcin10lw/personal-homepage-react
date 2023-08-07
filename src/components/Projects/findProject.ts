import { projectsMap } from './projectsMap';

export const findProject = (keyName: string) =>
  projectsMap.find((projectMap) => projectMap.keyName === keyName);
