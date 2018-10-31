import imageAquamarine from './assets/aquamarine.png';
import imageFoodmap from './assets/foodmap.png';
import imageDataDashboard from './assets/datadashboard.png';
import imageGamely from './assets/gamely.png';

const data = { 
  "texts": {
    "home": "Hi! I'm Lariz, a front end developer, very interested in interfaces and passionate with being creative.",
    "techSkills": ["HTML", "CSS", "UI", "Node.js", "JS", "Jquery", "React", "ES6", "Photoshop", "PHP"],
    "about": "I started with codes in 2011 for curiosity and now programming is my profession. For the last 3 years i have been working in freelancer projects customizing and development Sites and Blogs. In May till now I'm on a Front End Bootcamp at Laboratoria, learning a world about Javascript, HTML, CSS and UX and living an amazing experience with agil culture.",
    "contact": ["email", "linkedin", "github"]
  },
  "projects": [{
      "id": 1,
      "name": "Aquamarine",
      "image": imageAquamarine,
      "description": "A web application for find restaurants in a map, and have more information about them. Technologies used: Google Maps API, Bootstrap, Modals, Jquery"
    },
    {
      "id": 1,
      "name": "Foodmap",
      "image": imageFoodmap,
      "description": "A web application for find restaurants in a map, and have more information about them. Technologies used: Google Maps API, Bootstrap, Modals, Jquery"
    },
    {
      "id": 1,
      "name": "Data Dashboard",
      "image": imageDataDashboard,
      "description": "A web application for find restaurants in a map, and have more information about them. Technologies used: Google Maps API, Bootstrap, Modals, Jquery"
    },
    {
      "id": 2,
      "name": "Gamely",
      "image": imageGamely,
      "description": "A social network possible to post, edit, delete and follow friends. Use firebase to hosting and save data"
    }
  ]
}

export default data;