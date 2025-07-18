// Filters
myApp.filter("toDate", function () {
    return function (items) {
        return new Date(items);
    };
});
