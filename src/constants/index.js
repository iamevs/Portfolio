import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  requator,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Open Source Contributor",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
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
    title: "Web Developer",
    company_name: "Requator",
    icon: requator,
    iconBg: "#383E56",
    date: "November 2022",
    points: [
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, sapiente.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, sapiente.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, sapiente.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, sapiente.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, sapiente.",
    name: "Lorem",
    designation: "CEO",
    company: "Google",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, sapiente.",
    name: "Lorem",
    designation: "CEO",
    company: "Google",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, sapiente.",
    name: "Lorem",
    designation: "CEO",
    company: "Google",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },

];

const projects = [
  {
    name: "Project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, sapiente. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, sapiente.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, sapiente. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, sapiente.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, sapiente. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, sapiente.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
