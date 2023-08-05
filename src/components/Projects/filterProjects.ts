import { Project } from './types';

const filteredProjectsNames = [
  'marcin10lw',
  'Invoice-app',
  'currency-converter',
  'homepage',
  'To-do-list',
  'video-example',
];

export const filterProjects = (projects: Project[] | undefined) => {
  return projects?.filter((project) => {
    return (
      project.name !==
      filteredProjectsNames.find((filteredProject) => filteredProject === project.name)
    );
  });
};
