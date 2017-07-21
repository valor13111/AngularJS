var app = angular.module("groceryList", []);

app.controller("groceryController", function ($scope, $filter) {
    $scope.products = [
        { item: "Milk" },
        { item: "Juice" },
        { item: "Bread" }
    ];

    var sort = true;

    // adds an item
    // if the input box is empty, display errorText
    // if the indexOf object in input box doesn't match any item
    // already in array, return -1 and push new item onto array
    // else, display errorText
    $scope.addItem = function () {
        $scope.errorText = "";

        if (!$scope.newItem) {
            $scope.addClasses();
            $scope.errorText = "Enter an item";
            return;
        }

        var flag = false;

        // set flag to false and don't change if item isn't in grocery list
        // set flag to true if item is already in grocery list
        angular.forEach($scope.products, function(value, index) {
            if(value.item == $scope.newItem) {
                $scope.addClasses();
                $scope.errorText = "The item is already in your shopping list.";
                flag = true;
            }
        });

        // if flag is false, meaning item wasn't in grocery list, create object
        // and then push onto array, and reset input box text
        if (flag == false) {
            var obj = {item: $scope.newItem};
            $scope.removeClasses();
            $scope.products.push(obj);
            $scope.newItem = "";
        }
    }

    $scope.removeItem = function(item) {
        $scope.errorText = "";
        $scope.products.splice(item, 1);
    }

    // add alert classes for errors
    $scope.addClasses = function () {
        $scope.class = "alert alert-danger";
    };

    // remove classes on successfully adding an item
    $scope.removeClasses = function () {
        $scope.class = "";
    };

    // gives a visual for sorting
    // sets sort boolean to false, so it is sorted first in
    // sortItems(x, bool) function
    $scope.downArrowGlyphicon = function () {
        $scope.sorting = "glyphicon glyphicon-arrow-down";
        sort = false;
    };

    // gives a visual for sorting
    $scope.upArrowGlyphicon = function () {
        $scope.sorting = "glyphicon glyphicon-arrow-up";
        sort = true;
    }

    // sorts items, where x is the object 'item', and bool is letting
    // the orderBy know whether to reverse sort or not
    // when sort is equal to false, it sorts it descending and changes glyphicon
    // when sort is true, it sorts it ascending, and changes glyphicon back
    $scope.sortItems = function (x, bool) {
        if (sort == false) {
            $scope.myOrderBy = x;
            $scope.reverse = !bool;
            $scope.upArrowGlyphicon();
        } else {
            $scope.myOrderBy = x;
            $scope.reverse = bool;
            $scope.downArrowGlyphicon();
        }
    };

    // initializes down arrow glyphicon for sorting
    $scope.downArrowGlyphicon();
});
