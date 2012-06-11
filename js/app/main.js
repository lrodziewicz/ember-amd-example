requirejs.config({
    shim: {
        'libs/ember': {
            deps: ['libs/jquery'],
            exports: 'Ember'
        },
    },
    //By default load any module IDs from js/lib
    baseUrl: 'js',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        app: '../js/app'
    }
});

define([
    'libs/ember',
    'app/views/main-view'
], function(em, mainView) {
    var App = em.Application.create();

    var MainView = mainView.create();
    MainView.appendTo("#main");

    App.set('mainView', MainView);

    return App;
});
