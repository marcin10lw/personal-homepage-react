import { findProject } from './findProject';
import { projectsMap } from './projectsMap';
import { Project } from './types';

const useProjects = (projects: Project[] | undefined) => {
  const filteredProjects = projects?.filter((project) => {
    return !!projectsMap.find((projectMap) => projectMap.keyName === project.name);
  });

  const sortedProjects = filteredProjects?.sort((a, b) => {
    const project1 = findProject(a.name)?.id;
    const project2 = findProject(b.name)?.id;

    if (project1 && project2) {
      return project1 - project2;
    }

    return a.id - b.id;
  });

  return sortedProjects;
};

export default useProjects;
