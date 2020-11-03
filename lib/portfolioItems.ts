import { RefObject } from 'react';

type PI = {
  id: string,
  type: string,
  projectLink: string,
  viewLink: string,
  sourceLink: string,
  heading: string,
  subHeading: string,
  synopsis: string,
  technologies: string,
  featured: boolean
};

const portfolioItems: PI[] = [{
  id: 'ravenous',
  type: 'Web App',
  projectLink: '',
  viewLink: 'https://acalvino4.github.io/ravenous',
  sourceLink: 'https://github.com/acalvino4/ravenous',
  heading: 'Ravenous',
  subHeading: 'A Yelp clone built in React',
  synopsis: 'React Web App',
  technologies: 'react html5 css3 javascript website-development rest-api',
  featured: true
}, {
  id: 'nearme',
  type: 'Web App',
  projectLink: '',
  viewLink: 'https://acalvino4.github.io/NearMe',
  sourceLink: 'https://github.com/acalvino4/NearMe',
  heading: 'NearMe',
  subHeading: 'An Angular app to find cool places nearby',
  synopsis: 'Angular Web App',
  technologies: 'angularjs html5 javascript website-development rest-api',
  featured: true
}, {
  id: 'chocolate-soup',
  type: 'Notebook',
  projectLink: '',
  viewLink: 'https://acalvino4.github.io/ChocolateSoup',
  sourceLink: 'https://github.com/acalvino4/ChocolateSoup',
  heading: 'Chocolate Soup',
  subHeading: 'Web scraping, data analysis, and data visualization',
  synopsis: 'Data Analysis Project',
  technologies: 'web-scrapting data-cleaning data-science visualization python jupyter-notebook pandas matplotlib beautiful soup',
  featured: true
}, {
  id: 'jamming',
  type: 'Web App',
  projectLink: '',
  viewLink: 'https://jamming-acalvino4.surge.sh/',
  sourceLink: 'https://github.com/acalvino4/jamming',
  heading: 'Jamming',
  subHeading: 'A portal to search and update Spotify with React',
  synopsis: 'React Web App',
  technologies: 'react html5 css3 javascript website-development rest-api',
  featured: true
}, {
  id: 'old-portfolio',
  type: 'Website',
  projectLink: '',
  viewLink: 'https://acavlino4.github.io',
  sourceLink: 'https://github.com/acalvino4/acalvino4.github.io',
  heading: 'Old Portfolio',
  subHeading: 'A static website with Bootstrap and JQuery',
  synopsis: 'My early development',
  technologies: 'html5 css3 bootstrap4 website-development javascript jquery sass/scss',
  featured: false
}];

export default portfolioItems;
