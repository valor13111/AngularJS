var app = angular.module("groceryList", []);

app.controller("groceryController", function ($scope, $filter) {
    $scope.products = [
        { item: "Milk" },
        { item: "Juice" },
        { item: "Bread" }
    ];

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
    $scope.downArrowGlyphicon = function () {
        $scope.sorting = "glyphicon glyphicon-arrow-down";
    };

    // sorts items, where x is the object 'item'
    $scope.sortItems = function (x) {
            $scope.myOrderBy = x;
    };

    // initializes down arrow glyphicon for sorting
    $scope.downArrowGlyphicon();
});
