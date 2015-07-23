app = angular.module "app", ['pascalprecht.translate', 'phrase']

# PhraseApp project auth token
app.value "phraseProjectId", "YOUR-PROJECT-ID"

# Set to false to disable In-Context-Editor and use actual translation instead
app.value "phraseEnabled", true

app.config ['$translateProvider', ($translateProvider) ->
  $translateProvider.preferredLanguage "en"
  $translateProvider.useStaticFilesLoader({
    prefix: '/locales/',
    suffix: '.json'
  })
]

app.controller 'SelectLanguageController', ['$translate', '$scope', '$log', ($translate, $scope, $log) ->
  $scope.selectLanguage = (language) =>
    $translate.use(language)
    $scope.currentLanguage = $translate.use()
    $log.info "Language is now #{language}"
  $scope.currentLanguage = $translate.preferredLanguage()
]
