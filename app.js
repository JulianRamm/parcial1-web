const url = "https://gist.githubusercontent.com/josejbocanegra/9a28c356416badb8f9173daf36d1460b/raw/5ea84b9d43ff494fcbf5c5186544a18b42812f09/restaurant.json";
let burgers;
let tacos;
let salads;
let desserts;
let dys;
let index = 0;
let productList=[];
fetch(url).then(response=>{
    return response.json();
}).then(data =>{
    separateData(data);
});
function separateData(lista){
    burgers = lista[0].products;
    tacos = lista[1].products;
    salads = lista[2].products;
    desserts = lista[3].products;
    dys = lista[4].products;
}
function showProducts(name){
    let y = document.getElementById("summary");
    y.style.display ="none";


    let list;
    let title = document.getElementById("food-t");
    title.innerHTML = '';
    let cardContainer = document.getElementById("food");

    cardContainer.innerHTML = '';
    switch(name){
        case "burgers":
        title.innerHTML= "Burgers";
        list = burgers
        break;
        case "tacos":
        list = tacos
        title.innerHTML= "Tacos";
        break;
        case "salads":
        list = salads;
        title.innerHTML= "Salads";
        break;
        case "desserts":
        list = desserts;
        title.innerHTML= "Desserts";
        break;
        case "dys":
        list = dys;
        title.innerHTML= "Drinks & Sides";
        break;
    

    }
    list.forEach( e =>{
        createTaskCard(e,cardContainer);
    })
}


let createTaskCard = (food, container) => {
    let card1 = document.createElement('div');
    card1.className = "card";
    card1.style.width = "18rem";

    let cardImg = document.createElement('img');
    cardImg.className = 'card-img-top';
    cardImg.src = food.image;

    let card2 = document.createElement('div');
    card2.className = 'card-body';

    let h5 = document.createElement("h5");
    h5.className = "card-title";
    h5.innerText =food.name;

    let p = document.createElement("p");
    p.className = "card-text";
    p.innerText = food.description;

    let p1 = document.createElement("p");
    p1.className = "card-text";
    p1.innerHTML = "<b>$"+food.price+"</b>";

    let a = document.createElement('a');
    a.textContent = "Add to cart";
    a.className = 'btn btn-dark';
    a.addEventListener("click", function(){
        addToCart(food);
    });


    card2.appendChild(h5);
    card2.appendChild(p);
    card2.appendChild(p1);
    card2.appendChild(a);
    card1.appendChild(cardImg);
    card1.appendChild(card2);
    container.appendChild(card1);
}
function addToCart(product){
    productList.forEach(el =>{
        console.log(product);
        if(el.name ===product.name){
            el.oc++;
            let it = document.getElementById(""+product.name);
            it.innerHTML=el.oc;
            let it2 = document.getElementById(product.name+"l");
            it2.
            return;
        }
    });
    let items = document.getElementById("items");
    items.innerHTML = ++index +" items";
    console.log(product);
    let table = document.getElementById("items-s");
    console.log(table);
    let row = table.insertRow(index-1);
   
    let id = row.insertCell(0);
    let qty = row.insertCell(1);
    let description = row.insertCell(2);
    let unitp = row.insertCell(3);
    let amount = row.insertCell(4);
    amount.setAttribute("id",product.name+"l");
    qty.setAttribute("id",product.name);
    id.innerHTML = ""+(index+1);
    qty.innerHTML= 1;
    description.innerHTML = product.name;
    unitp.innerHTML = product.price;
    console.log(qty);
    amount.innerHTML = 1*parseInt(product.price);
    productList.push({name:product.name,oc:1});
}

function hideOrShowEvents(type) {
    var x, y;
    if (type == 1) {
      x = document.getElementById("food");
      y = document.getElementById("summary");
    } else {
      x = document.getElementById("summary");
      y = document.getElementById("food");
    }
    if (x.style.display === "none" && y.style.display !== "none") {
      y.style.display = "none";
      x.style.display = "block";
    } else if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function showSummary(){
    let x = document.getElementById("food");
    let y = document.getElementById("summary");
    x.innerHTML="";
    y.style.display = "block";
    let title = document.getElementById("food-t");
    title.innerHTML= "Order detail";
  }