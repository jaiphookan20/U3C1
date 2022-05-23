function appendProducts() {
    let data = JSON.parse(localStorage.getItem("products")) || [];
    let container = document.getElementById("all_products");
    container.innerHTML = null;


    data.forEach(function (element, index) {
        console.log(element);

        //Creating a div for each set of data:
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = element.image;
        
        let typeText = document.createElement("p");
        typeText.innerText = element.type;

        let descText = document.createElement("p");
        descText.innerText = element.desc;

        let priceText = document.createElement("p");
        priceText.innerText = element.price;

        let removeBtn = document.createElement('button');
        removeBtn.innerText = "Remove";
        removeBtn.id = "remove_product";
        removeBtn.addEventListener("click", function() {
            deleteElement(index);
        });

        div.append(img,typeText,descText,priceText,removeBtn);
        container.append(div);
    });
}

function deleteElement(index) {
    event.target.parentNode.remove();

    let data = JSON.parse(localStorage.getItem("products")) || [];
    
    data.splice(index, 1);
    localStorage.setItem('products', JSON.stringify(data));

}

appendProducts();

