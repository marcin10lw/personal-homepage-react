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
    name: 'ecommerce website',
    description:
      'The project is an e-commerce website where users can browse products, add them to the cart, and complete the checkout process. It provides a responsive layout, interactive elements, and features such as product management, cart functionality, and form validation. After checkout, users receive an order confirmation modal.',
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
    name: 'jobs api',
    description: 'REST API buit with Node.js/Express/MongoDB',
    tags: ['NODE.JS', 'EXPRESS', 'JSON WEB TOKEN', 'MONGODB'],
    image: 'images/jobs-api.jpg',
    liveUrl: undefined,
    codeUrl: undefined,
    documentationLink: 'https://temp-jobs-api-09f1.onrender.com/api-docs/',
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
