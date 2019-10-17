import angular from 'angular';
import 'angular-translate';
import 'angular-translate-loader-static-files';
import 'angular-phrase';

const app = angular.module("app", ['pascalprecht.translate', 'phrase']);

app.value("phraseProjectId", "00000000000000004158e0858d2fa45c");
app.value("phraseEnabled", true);

app.config(['$translateProvider',
    ($translateProvider: any) => {
        $translateProvider.preferredLanguage("en");
        return $translateProvider.useStaticFilesLoader({
            prefix: 'src/locales/',
            suffix: '.json'
        });
    }
]);

app.controller('MenuNavigation', ['$translate', '$scope', '$log',
    ($translate, $scope, $log) => {
        $scope.currentLanguage = $translate.preferredLanguage();
        $scope.selectLanguage = (language: any) => {
            $translate.use(language);
            $scope.currentLanguage = language;
            $log.info("Language is now " + language);
        };
    }
]);
