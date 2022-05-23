//store the products array in localstorage as "products"

// Each product should be stored in an array and this array will be stored in local storage.

// Provide a “Add Product” button to add the data to local storage.

// Create a “Show Products” button at the top which will redirect you to “inventory.html”


function storeData(e) {
    e.preventDefault();

    //Collect Data:
    let form = document.getElementById('products');
    let type = form.type.value;
    let desc = form.desc.value;
    let price = form.price.value;
    let image = form.image.value;
    
    // console.log(type,desc,price,image)

    let p1 = new Product(type,desc,price,image);
    // console.log(p1);

    let data = JSON.parse(localStorage.getItem("products")) || [];
    data.push(p1);

    localStorage.setItem("products",JSON.stringify(data));

    
}

// Constructor
function Product(t,d,p,i) {
    this.type = t;
    this.desc = d;
    this.price = p;
    this.image = i;
}


