import imageAquamarine from './assets/aquamarine.png';
import imageFoodmap from './assets/foodmap.png';
import imageDataDashboard from './assets/datadashboard.png';
import imageGamely from './assets/gamely.png';
import imageDeAluguel from './assets/dealuguel.png';
import imageSimplesBella from './assets/simplesbella.png';

const data = { 
  "texts": {
    "home": "Hi! I'm Larissa (or Lariz), from São Paulo. A front end developer, very interested in interfaces and passionate with being creative. When I start a project, I emmerge and believe in it, make it with focus and determination to do my best. I'm good to resolving problems and better in sharing my knowledge.",
    "techSkills": ["HTML", "CSS", "UI", "Node.js", "JS", "Jquery", "React", "ES6", "Photoshop", "PHP"],
    "about": "I started with codes in 2011 for curiosity and now programming is my profession. For the last 3 years I have been working in freelancer projects customizing and development Sites and Blogs. In May till now I'm on a Front End Bootcamp at Laboratoria, learning a world about Javascript, HTML, CSS and UX and living an amazing experience with agil culture.",
    "contact": [
      {
        type: "link",
        url: "mailto:laris.santana09@gmail.com",
        text: "email"
      },
      {
        type: "link",
        url: "https://linkedin.com/in/larissa--santana",
        text: "linkedin"},
      {
        type: "link",
        url: "https://github.com/butlariz",
        text: "github"},
      {
        type: "link",
        url: "mailto:laris.santana09@gmail.com&subject=CV&body=Olá, estava vendo seu portfólio e gostaria de solicitar o seu currículo!",
        text: "resume"
      }
      ]
  },
  "projects": [{
      "id": 1,
      "name": "Aquamarine",
      "image": imageAquamarine,
      "description": "Aquamarine is a SPA Ecommerce. Build with page.js, Mercado Livre API, and Local Storage for save data about bag items and wishlist item.",
      "url": "https://aquamarine-2019.firebaseapp.com"
    },
    {
      "id": 2,
      "name": "Foodmap",
      "image": imageFoodmap,
      "description": "A web application for find restaurants in a map, and have more information about them. Technologies used: Google Maps API, Bootstrap, Modals, Jquery.",
      "url": "https://aquamarine-2019.firebaseapp.com"
    },
    {
      "id": 3,
      "name": "Dashboard",
      "image": imageDataDashboard,
      "description": "This Dashboard start with a UX process. An web app that search data in a JSON, make a treatment and show it on page in graphics using Google Charts."
    },
    {
      "id": 4,
      "name": "Gamely",
      "image": imageGamely,
      "description": "A social network about Games. Possible to sing up, sing in, post, edit, delete and follow friends. Use firebase to hosting and save data."
    },
    {
      "id": 5,
      "name": "De Aluguel",
      "image": imageDeAluguel,
      "description": "A WP theme exclusive for De Aluguel. Include some features with JS: recent posts panel with categories and menu with transition when scrolling the page."
    },
    {
      "id": 6,
      "name": "Simples Bella",
      "image": imageSimplesBella,
      "description": "A simple blog theme made exclusive for Simples Bella blog. Utilizing Google API with JS to Recent Posts and Related Posts."
    }
  ]
}

export default data;