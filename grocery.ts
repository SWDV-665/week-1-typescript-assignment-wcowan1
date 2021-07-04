// create grocery class
class grocery {
    name: string;
    quantity: number;
    price: number;
    supplier: string;

// add a constructor
    constructor(n:string, q:number, p:number, s:string){
        this.name=n;
        this.quantity=q;
        this.price=p;
        this.supplier=s;
    }
}

//create list of grocery items
let list_grocery_items=[
    new grocery("milk",1,5,"Farmer Greg"),
    new grocery("eggs",2,12,"Farmer Tom"),
    new grocery("bread",3,8,"Baker Sam"),
]

// access html area were list will go
const ele = document.getElementById("app");

// create a <p> element for each item in list_grocery_items then
// append it to the html page
list_grocery_items.forEach(e => {
    const p = document.createElement("p");
    p.textContent = `${e.name}, ${e.quantity}, $${e.price}, ${e.supplier}`;
    ele.appendChild(p);
});
