import { Project } from './types';

export const projects: Project[] = [
  {
    id: 1,
    name: 'TerraEye',
    description:
      'Page is written in React with TypeScript. During development I worked with experienced figma designers and senior programmers.',
    tags: [
      'REACT',
      'REACT HOOKS',
      'TYPESCRIPT',
      'STYLED-COMPONENTS',
      'GIT',
      'REACT-HELMET',
    ],
    image: 'images/terraeye.jpg',
    liveUrl: 'https://terraeye.co/',
    codeUrl: undefined,
    documentationLink: undefined,
  },
  {
    id: 2,
    name: 'fullstack jobs tracking app',
    description:
      'The Fullstack Jobs App addresses the business challenge of streamlining job hunting by providing user authentication, application management, status tracking, job search analytics, and a user-friendly interface.',
    tags: [
      'REACT',
      'TYPESCRIPT',
      'REACT QUERY',
      'REACT HOOK FORM',
      'ZOD',
      'STYLED-COMPONENTS',
      'NODE.JS',
      'EXPRESS',
      'MONGODB',
    ],
    image: 'images/jobs-app.jpg',
    liveUrl: 'https://marcin10lw.github.io/fullstack-jobs-app/',
    codeUrl: 'https://github.com/marcin10lw/fullstack-jobs-app',
    documentationLink: 'https://jobs-api-dyvv.onrender.com/api-docs/',
  },
  {
    id: 3,
    name: 'Audio Store',
    description:
      'The Audio Store project addresses the business challenge of enhancing online shopping by offering a responsive layout, interactive elements, and crucial features such as product management, cart functionality, and form validation.',
    tags: [
      'REACT',
      'REACT HOOKS',
      'TYPESCRIPT',
      'SASS',
      'REACT QUERY',
      'REACT-HOOK-FORM',
      'ZOD',
    ],
    image: 'images/audiophile.jpg',
    liveUrl: 'https://marcin10lw.github.io/audiophile-react',
    codeUrl: 'https://github.com/marcin10lw/audiophile-react',
    documentationLink: undefined,
  },
  {
    id: 4,
    name: 'Advanced fullstack task manager',
    description:
      "This project in one of numerous YouCode projects. As a challenge I decided to connect it with Firebase to create a fullstack application. I'm proud of this application as I use it myself every day.",
    tags: ['REACT', 'FIREBASE', 'STYLED-COMPONENTS', 'REDUX'],
    image: 'images/todo-list.jpg',
    liveUrl: 'https://marcin10lw.github.io/Fullstack-Todo-list-react',
    codeUrl: 'https://github.com/marcin10lw/Fullstack-Todo-list-react',
    documentationLink: undefined,
  },
  {
    id: 5,
    name: 'country finder',
    description:
      'This project is part of a series of Frontend Mentor challenges. It offers a valuable opportunity to explore and gain greater insights into the details of a specific nation.',
    tags: ['REACT', 'TYPESCRIPT', 'STYLED-COMPONENTS', 'REACT QUERY'],
    image: 'images/countries.jpg',
    liveUrl: 'https://marcin10lw.github.io/rest-countries-react',
    codeUrl: 'https://github.com/marcin10lw/rest-countries-react',
    documentationLink: undefined,
  },
  {
    id: 6,
    name: 'movies browser',
    description:
      'The Movies Browser is a platform that allows users to search and browse movies, popular actors and actresses, as well as their production history. The website was created by a team of three individuals as part of a group project and was completed within three weeks.',
    tags: ['REACT', 'TYPESCRIPT', 'STYLED-COMPONENTS', 'REDUX', 'REACT QUERY'],
    image: 'images/movies-browser.jpg',
    liveUrl: 'https://marcin10lw.github.io/movies-browser',
    codeUrl: 'https://github.com/marcin10lw/movies-browser',
    documentationLink: undefined,
  },
  {
    id: 7,
    name: 'space tourism',
    description:
      'This is a multi-page site with animations created as part of numerous Frontend Mentor challenges.',
    tags: ['REACT', 'TYPESCRIPT', 'STYLED-COMPONENTS'],
    image: 'images/space-tourism.jpg',
    liveUrl: 'https://marcin10lw.github.io/space-tourism-react',
    codeUrl: 'https://github.com/marcin10lw/space-tourism-react',
    documentationLink: undefined,
  },
];
