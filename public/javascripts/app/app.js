(function() {
  var app;

  app = angular.module("app", ['pascalprecht.translate', 'phrase']);

  app.value("phraseAuthToken", "2024342cc784da65e94bb3a9ff1805de");

  app.value("phraseEnabled", true);

  app.config([
    '$translateProvider', function($translateProvider) {
      $translateProvider.preferredLanguage("en");
      return $translateProvider.useStaticFilesLoader({
        prefix: '/locales/',
        suffix: '.json'
      });
    }
  ]);

  app.controller('SelectLanguageController', [
    '$translate', '$scope', '$log', function($translate, $scope, $log) {
      $scope.selectLanguage = (function(_this) {
        return function(language) {
          $translate.use(language);
          $scope.currentLanguage = $translate.use();
          return $log.info("Language is now " + language);
        };
      })(this);
      return $scope.currentLanguage = $translate.preferredLanguage();
    }
  ]);

}).call(this);
