export class App {
  configureRouter(config, router) {
    config.title = 'BrisJS';
    config.map([
      { route: ['', 'foo'], name: 'foo',      moduleId: 'foo',      nav: true, title: 'Foo' }
    ]);

    this.router = router;
  }
}
