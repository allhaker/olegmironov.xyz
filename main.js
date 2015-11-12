require.config({
  shim: {
    "bootstrap" : {"deps": ['jquery']},
    "backstretch":["jquery"]
  },
  paths: {
    "jquery":"bower_components/jquery/dist/jquery.min",
    "bootstrap": "bower_components/bootstrap/dist/js/bootstrap.min",
    "my_jquery":"js/my_jquery"
  }
});

require(["jquery","bootstrap","my_jquery"]);
