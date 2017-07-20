var app = angular.module("groceryList", []);

app.controller("groceryController", function ($scope) {
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
            $scope.errorText = "Enter an item";
            return;
        }

        // set flag to false and don't change if item isn't in grocery list
        // set flag to true if item is already in grocery list
        var flag = false;
        angular.forEach($scope.products, function(value, index) {
            if(value.item == $scope.newItem) {
                $scope.errorText = "The item is already in your shopping list.";
                flag = true;
            }
        });

        // if flag is false, meaning item wasn't in grocery list, create object
        // and then push onto array
        if (flag == false) {
            var obj = {item: $scope.newItem};
            $scope.products.push(obj);
        }
    }

    $scope.removeItem = function(item) {
        $scope.errorText = "";
        $scope.products.splice(item, 1);
    }
})
