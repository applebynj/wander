(function() {
    angular
        .module("WbdvProject")
        .controller("SearchController", SearchController)

    function SearchController($routeParams, GooglePlaceService) {
        var model = this;

        model.userId = $routeParams["uid"];

        model.findPlaceByTextSearch = findPlaceByTextSearch;

        function init() { }
        init();

        function findPlaceByTextSearch(searchText) {
            //Remove all spaces TODO: remove other escape chars as it's a url param
            searchText = searchText.replace(/ /g, '+');
            GooglePlaceService
                .findPlaceByTextSearch(searchText)
                .then(function(response) {
                    model.results = response.data.results;
                })

        }
    }
})();