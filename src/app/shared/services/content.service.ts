import { Injectable } from '@angular/core';

@Injectable()
export class ContentService {
   pages: Object = {
    'home': {title: 'Sashank Nekkanti', subtitle: 'Automation Strategist', content: '', image: '/assets/bg3.jpg'},
    'about': {title: 'About', subtitle: 'About Us', content: 'Some content about us.', image: '/assets/bg2.jpg'},
    'contact': {title: 'Contact', subtitle: 'Contact Us', content: 'How to contact us.', image: 'assets/bg1.jpg'}
  };

  constructor() { }

}
