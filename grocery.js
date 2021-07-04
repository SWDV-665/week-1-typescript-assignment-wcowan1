// create grocery class
var grocery = /** @class */ (function () {
    // add a constructor
    function grocery(n, q, p, s) {
        this.name = n;
        this.quantity = q;
        this.price = p;
        this.supplier = s;
    }
    return grocery;
}());
//create list of grocery items
var list_grocery_items = [
    new grocery("milk", 1, 5, "Farmer Greg"),
    new grocery("eggs", 2, 12, "Farmer Tom"),
    new grocery("bread", 3, 8, "Baker Sam"),
];
// access html area were list will go
var ele = document.getElementById("app");
// create a <p> element for each item in list_grocery_items then
// append it to the html page
list_grocery_items.forEach(function (e) {
    var p = document.createElement("p");
    p.textContent = e.name + ", " + e.quantity + ", $" + e.price + ", " + e.supplier;
    ele.appendChild(p);
});
