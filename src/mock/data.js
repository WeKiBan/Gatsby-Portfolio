import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Wes Banyard', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Wes Banyard',
  subtitle: 'Front-End Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "I'm Wes, a web developer from the West Midlands. I'm passionate about tech and I love creating innovative applications that make people's lives easier. I find learning new technologies and creating solutions to difficult problems massively rewarding.",
  paragraphTwo:
    'At the moment my evenings are spent improving my depth of knowledge with React and Material UI. My long term goal is to become an effective full stack developer, able to efficiently turn great ideas into working products',
  paragraphThree:
    'In my spare time I love to Travel and take photographs and I am also passionate about learning Italian',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'CV_Generator.png',
    title: 'React CV Generator App',
    info: 'A React Application which generates and prints a CV from user entered data. Utilizes controlled forms and React Hooks',
    info2: 'React, SASS',
    url: 'https://wekiban.github.io/CV_App/',
    repo: 'https://github.com/WeKiBan/CV_App', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'taski.png',
    title: 'Taski',
    info: 'A Todo list App built using Vanilla JS and Bootstrap',
    info2: 'Javascript, Bootstrap',
    url: 'https://wekiban.github.io/Taski/',
    repo: 'https://github.com/WeKiBan/Taski', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'pbtimer.png',
    title: 'PB Timer',
    info: "As I love to solve the Rubik's cube in my spare time I decided to build this application using Vanilla JS to keep track of my times.",
    info2: 'Javascript',
    url: 'https://wekiban.github.io/Rubiks-cube-timer/',
    repo: 'https://github.com/WeKiBan/Rubiks-cube-timer', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'weather.png',
    title: 'Weather App',
    info: "A web application which dynamically displays the present weather at the user's favourite locations around the globe, from an array of locations which is persisted in local storage.",
    info2: 'Javascript, Bootstrap, OpenWeatherAPI',
    url: 'https://wekiban.github.io/weather-app-2/',
    repo: 'https://github.com/WeKiBan/weather-app-2', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'wes.banyard@googlemail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/wes-banyard/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/WeKiBan',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
