let productsFilter = {
    data:[{
        id : 0,
        productFName:"kale skin cleanser",
        category:"skincare",
        price : "20",
        image :"images/skincare8.jpg",
    },
    {
        id :1,
        productFName:"aveeno body lotion",
        category:"bodycare",
        price : "20",
        image :"images/daily-moisturizer_prev_ui.png",
    },
    {
        id :2,
        productFName:"briogeo hair mask",
        category:"haircare",
        price : "20",
        image :"images/haircare7.jpg",
    },
    {
        id :3,
        productFName:"skin dew",
        category:"skincare",
        price : "20",
        image :"images/skincare7.png",
    },
    {
        id :4,
        productFName:"COCO&EVE body cream",
        category:"bodycare",
        price : "20",
        image :"images/bodycream1.jpg",
    },
    {
        id :5,
        productFName:"intensive foot therapy",
        category:"bodycare",
        price : "20",
        image :"images/bodycream3foot.jpg",
    },
    {
        id :6,
        productFName:"oudi body cleanser",
        category:"bodycare",
        price : "20",
        image :"images/bodycream4 cleanser.jpg",
    },
    {
        id :7,
        productFName:"face gym",
        category:"skincare",
        price : "20",
        image :"images/skincare1.jpg",
    },
    {
        id :8,
        productFName:"ab",
        category:"skincare",
        price : "20",
        image :"images/skincare2.jpg",
    },
    {
        id :9,
        productFName:"vitamin c cream",
        category:"skincare",
        price : "20",
        image :"images/skincare3.jpg",
    },
    {
        id :10,
        productFName:"LANEIGE LIP ",
        category:"skincare",
        price : "20",
        image :"images/skincare9.jpg",
    },
    {
        id :11,
        productFName:"bonadi sandi",
        category:"skincare",
        price : "20",
        image :"images/skincare5.jpg",
    },
    {
        id :12,
        productFName:"blondi ale hair cream",
        category:"hairare",
        price : "20",
        image :"images/haircare1.jpg",
    },
    {
        id :13,
        productFName:"olaplex hair serum",
        category:"haircare",
        price : "20",
        image :"images/haircare2.jpg",
    },
    {
        id :14,
        productFName:"coco&eve hair cream",
        category:"haircare",
        price : "20",
        image :"images/haircare3.jpg",
    },
    {
        id :15,
        productFName:"nuxe hair mist",
        category:"haircare",
        price : "20",
        image :"images/haircare4.jpg",
    },
    {
        id :16,
        productFName:"biossansi hair serum",
        category:"haircare",
        price : "20",
        image :"images/haircare5.jpg",
    },
    {
        id :17,
        productFName:"baobab hair oil",
        category:"haircare",
        price : "20",
        image :"images/haircare6.jpg",
    },
   

    ],
};
for(let i of productsFilter.data){
    console.log(i.category);
    console.log(`${i.category}`);
    let card1 = document.createElement("div");
    card1.classList.add("card1",i.category,"hide1");
    let imgContainer =document.createElement("div");
    imgContainer.classList.add("image-container");
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    console.log(image)
    card1.appendChild(imgContainer);
    let container1 =document.createElement("div");
    container1.classList.add("container1");
    let name =document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productFName.toUpperCase();
    container1.appendChild(name);
    let price = document.createElement("h6");
    price.innerText ="$"+ i.price;
    container1.appendChild(price);



    card1.appendChild(container1);
    

    document.getElementById("products-filter").appendChild(card1);


}
function filterProduct(value){
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
        if (value.toUpperCase() == button.innerText.toUpperCase()){
            button.classList.add("active");
        }
        else{
            button.classList.remove("active");
        }
    });
    let elements = document.querySelectorAll(".card1");
    elements.forEach((element) =>{
        if(value == "all"){
            element.classList.remove("hide1");
        }
        else{
            if(element.classList.contains(value)){
                element.classList.remove("hide1");
            }
            else{
                element.classList.add("hide1");
            }
        }
    })
}

document.getElementById("search").addEventListener("click", () => {
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name"); 
  let cards = document.querySelectorAll(".card1");
   
  elements.forEach((element, index) => {
    if(element.innerText.includes(searchInput.toUpperCase())){
        cards[index].classList.remove("hide1");
    }
    else{
        cards[index].classList.add("hide1");
    }
  })
});

window.onload = () => {
    filterProduct("all");
};