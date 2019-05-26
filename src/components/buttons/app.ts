import { Router, RouterConfiguration } from 'aurelia-router';

export class App {
  private router: Router;

  private configureRouter(config: RouterConfiguration, router: Router) {
    config.map([
      { route: '',                moduleId: './buttons',                  nav: true,  title: '' },
      { route: 'fab',             moduleId: './fab/fab',                  nav: true,  title: 'FAB' },
      { route: 'icon-button',     moduleId: './icon-button/icon-button',  nav: true,  title: 'Icon Button' }
    ]);
    this.router = router;
  }
}
