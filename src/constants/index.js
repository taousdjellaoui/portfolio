import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  kotlin,
  csharp,
  java,
  vue,
  unity,
  php,
  figma,
  docker,
  artur,
  rosemont,
  benji,
  lingochat,
  vinyl,
  animix,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developpement",
    icon: web,
  },
  {
    title: "Mobile Native Developpement",
    icon: mobile,
  },
  {
    title: "Fullstack Developpement",
    icon: backend,
  },
  {
    title: "Game Developpement",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "php",
    icon: php,
  },
  {
    name: "vue",
    icon: vue,
  },
  {
    name: "unity",
    icon: unity,
  },
  {
    name: "kotlin",
    icon: kotlin,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "csharp",
    icon: csharp,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Intern At Progression",
    company_name: "Rosemont College",
    icon: rosemont,
    iconBg: "#E6DEDD",
    date: "january 2025 - march 2025",
    points: [
      "Contributed to the development of an educational web application focused on programming learning.",
      "Built interactive user interfaces using Vue.js and Vuetify to enhance the learning experience.",
      "Integrated backend features with Laravel and PHP to manage user data and course content.",
      "Collaborated in a small agile team to implement features, fix bugs, and ensure a smooth user experience.",
    ],
  },
  {
    title: "Intern at Artur.art",
    company_name: "L'Original",
    icon: artur,
    iconBg: "#E6DEDD",
    date: "march 2025 - june 2025",
    points: [
      "Developed and maintained an artistic website using WordPress, PHP, and custom shortcodes.",
      "Built interactive user interfaces with HTML, CSS, and JavaScript to reflect the creative vision of the project.",
      "Used Figma to prototype and present design ideas and page layouts during the development process.",
      "Integrated AI-based features to enhance user interaction and personalize the experience.",
      "Ensured the website was responsive and functioned consistently across different browsers and devices.",
    ],
  },

];


const projects = [
  {
    name: "Animix",
    description:
      "A web-based platform for anime lovers that lets users browse a rich catalogue of anime, add their favorites, and manage their personal watchlist. Built for discovering, organizing, and celebrating your favorite series.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "sql",
        color: "green-text-gradient",
      },
      {
        name: "html & css",
        color: "pink-text-gradient",
      },
    ],
    image: animix,
    source_code_link: "https://github.com/taousdjellaoui",
  },
  {
    name: "LingoChat",
    description:
      "A web application that allows users to create an account, connect with others, and chat based on shared language interests. Users can showcase the languages they speak on their profile and engage in meaningful conversations with a global community.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "java",
        color: "pink-text-gradient",
      },
    ],
    image: lingochat,
    source_code_link: "https://github.com/taousdjellaoui",
  },
  {
    name: "Vinyl Paradise",
    description:
      "An Android app connected to a custom API that allows users to browse a wide selection of vinyl records, view detailed information, and contact sellers directly to buy and collect vinyls. Perfect for music enthusiasts and collectors.",
    tags: [
      {
        name: "Kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "Android Studio",
        color: "green-text-gradient",
      },
    ],
    image: vinyl,
    source_code_link: "https://github.com/taousdjellaoui",
  },
  {
    name: "Arctic Adventures: Benji's Quest",
    description:
      "A 2D/3D adventure game developed in Unity that follows Benji, a brave little penguin on a mission to collect as many fish as possible to feed his family. Dive into icy landscapes, overcome obstacles, and explore the Arctic in this fun and heartwarming quest.",
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: "Csharp",
        color: "green-text-gradient",
      },
    ],
    image: benji,
    source_code_link: "https://github.com/taousdjellaoui",
  },
];

export { services, technologies, experiences, projects };
