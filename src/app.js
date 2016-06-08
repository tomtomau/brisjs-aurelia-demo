export class App {
  configureRouter(config, router) {
    config.title = 'BrisJS';
    config.map([
      { route: ['', 'list'], name: 'list',      moduleId: 'list',      nav: true, title: 'List' }
    ]);

    this.router = router;
  }
}
