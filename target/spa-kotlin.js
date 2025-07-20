if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'spa-kotlin'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'spa-kotlin'.");
}this['spa-kotlin'] = function (_, Kotlin) {
  'use strict';
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Unit = Kotlin.kotlin.Unit;
  var throwCCE = Kotlin.throwCCE;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  function Content() {
    Content_instance = this;
    this.home = '\n' + '        <div class=' + '"' + 'container pt-4' + '"' + '>' + '\n' + '            <h2>Welcome to Kotlin/JS Dashboard<\/h2>' + '\n' + '            <div class=' + '"' + 'row mt-4' + '"' + '>' + '\n' + '                <div class=' + '"' + 'col-md-6' + '"' + '>' + '\n' + '                    <div class=' + '"' + 'card' + '"' + '>' + '\n' + '                        <div class=' + '"' + 'card-header' + '"' + '>Quick Stats<\/div>' + '\n' + '                        <div class=' + '"' + 'card-body' + '"' + '>' + '\n' + '                            <h5 class=' + '"' + 'card-title' + '"' + '>Website Performance<\/h5>' + '\n' + '                            <p class=' + '"' + 'card-text' + '"' + '>Your website is performing well with 99.9% uptime this month.<\/p>' + '\n' + '                        <\/div>' + '\n' + '                    <\/div>' + '\n' + '                <\/div>' + '\n' + '                <div class=' + '"' + 'col-md-6' + '"' + '>' + '\n' + '                    <div class=' + '"' + 'card' + '"' + '>' + '\n' + '                        <div class=' + '"' + 'card-header' + '"' + '>System Info<\/div>' + '\n' + '                        <div class=' + '"' + 'card-body' + '"' + '>' + '\n' + '                            <h5 class=' + '"' + 'card-title' + '"' + '>Server Status<\/h5>' + '\n' + '                            <p class=' + '"' + 'card-text' + '"' + '>All systems operational. Last updated: ' + (new Date()).toLocaleString() + '<\/p>' + '\n' + '                            <p class=' + '"' + 'card-text' + '"' + '>Last login: Admin<\/p>' + '\n' + '                        <\/div>' + '\n' + '                    <\/div>' + '\n' + '                <\/div>' + '\n' + '            <\/div>' + '\n' + '        <\/div>' + '\n' + '    ';
    this.about = '\n        <div class="container pt-4">\n            <h2>About Our Dashboard<\/h2>\n            <div class="card mt-4">\n                <div class="card-body">\n                    <h5 class="card-title">Built with Kotlin/JS<\/h5>\n                    <p class="card-text">This simple dashboard demonstrates how to create a Single Page Application using Kotlin/JS.<\/p>\n                    <p>Key technologies used:<\/p>\n                    <ul>\n                        <li>Kotlin 1.5.31<\/li>\n                        <li>Kotlin/JS<\/li>\n                        <li>Bootstrap 5<\/li>\n                        <li>Maven<\/li>\n                    <\/ul>\n                <\/div>\n            <\/div>\n        <\/div>\n    ';
  }
  Content.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Content',
    interfaces: []
  };
  var Content_instance = null;
  function Content_getInstance() {
    if (Content_instance === null) {
      new Content();
    }return Content_instance;
  }
  function App() {
    this.currentPage_0 = 'home';
  }
  function App$start$lambda(this$App) {
    return function (it) {
      this$App.setupNavigation_0();
      this$App.renderPage_0(this$App.currentPage_0);
      return Unit;
    };
  }
  App.prototype.start = function () {
    window.onload = App$start$lambda(this);
  };
  function App$setupNavigation$lambda(this$App) {
    return function (it) {
      it.preventDefault();
      this$App.navigateTo_0('home');
      return Unit;
    };
  }
  function App$setupNavigation$lambda_0(this$App) {
    return function (it) {
      it.preventDefault();
      this$App.navigateTo_0('about');
      return Unit;
    };
  }
  App.prototype.setupNavigation_0 = function () {
    var homeNav = document.getElementById('nav-home');
    var aboutNav = document.getElementById('nav-about');
    homeNav != null ? (homeNav.addEventListener('click', App$setupNavigation$lambda(this)), Unit) : null;
    aboutNav != null ? (aboutNav.addEventListener('click', App$setupNavigation$lambda_0(this)), Unit) : null;
  };
  App.prototype.navigateTo_0 = function (page) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    this.currentPage_0 = page;
    (tmp$_0 = (tmp$ = document.getElementById('nav-home')) != null ? tmp$.classList : null) != null ? (tmp$_0.remove('active'), Unit) : null;
    (tmp$_2 = (tmp$_1 = document.getElementById('nav-about')) != null ? tmp$_1.classList : null) != null ? (tmp$_2.remove('active'), Unit) : null;
    (tmp$_4 = (tmp$_3 = document.getElementById('nav-' + page)) != null ? tmp$_3.classList : null) != null ? (tmp$_4.add('active'), Unit) : null;
    this.renderPage_0(page);
  };
  App.prototype.renderPage_0 = function (page) {
    var tmp$;
    var contentElement = Kotlin.isType(tmp$ = document.getElementById('content'), HTMLElement) ? tmp$ : throwCCE();
    switch (page) {
      case 'home':
        contentElement.innerHTML = Content_getInstance().home;
        break;
      case 'about':
        contentElement.innerHTML = Content_getInstance().about;
        break;
      default:contentElement.innerHTML = Content_getInstance().home;
        break;
    }
  };
  App.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'App',
    interfaces: []
  };
  function main() {
    (new App()).start();
  }
  var package$com = _.com || (_.com = {});
  var package$mde = package$com.mde || (package$com.mde = {});
  Object.defineProperty(package$mde, 'Content', {
    get: Content_getInstance
  });
  package$mde.App = App;
  package$mde.main = main;
  main();
  Kotlin.defineModule('spa-kotlin', _);
  return _;
}(typeof this['spa-kotlin'] === 'undefined' ? {} : this['spa-kotlin'], kotlin);

//# sourceMappingURL=spa-kotlin.js.map
