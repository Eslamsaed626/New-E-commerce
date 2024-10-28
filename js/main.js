// for product details main image
const mainImag = document.querySelector(".product-img .main-img");
const smallImag = document.querySelectorAll(".small-img img");
console.log(mainImag);


const featProduct = document.querySelector(".featProduct");
const newArrivelcon = document.querySelector(".newArrivelcon");





let allData,
featurPro,
Arrivel,
allproduct;
// console.log(productItem);

// product details main image
smallImag.forEach((img)=>{
    img.addEventListener("click",function(){
        console.log(img.src);
        imgSrc = img.src;
        mainImag.src = imgSrc;
    })
})



// get products all items form products.json

const xhttp = new XMLHttpRequest();
xhttp.onload = function(){

    // let products = JSON.parse(xhttp.responseText)
    // console.log(products.products);
    
    if(this.readyState === 4 && this.status === 200){
        allData = JSON.parse(xhttp.responseText);
        allproduct = allData.allproduct;
        // console.log(allproduct);
        
        featurPro = allproduct.featurproducts;
        Arrivel = allproduct.newArrivel;
        // console.log(featurPro);
        // console.log(Arrivel);
        
        // get all featur product
        for (let i = 0; i < featurPro.length; i++) {
       let product = `
         <a id="${featurPro[i].id}" class="item" onclick="get(${featurPro[i].id})">
              <div class="product">
                <img src="${featurPro[i].image}" width="100%">
                <div class="des">
                  <span>adidas</span>
                  <h5>cartoon astronaut t-shirts</h5>
                  <div class="star">
                     <i class="fas fa-star"></i>
                     <i class="fas fa-star"></i>
                     <i class="fas fa-star"></i>
                     <i class="fas fa-star"></i>
                     <i class="fas fa-star"></i>
                  </div>
                  <div class="des-fot">
                    <h4>$${featurPro[i].price}</h4>
                    <span href="#"><i class="fas fa-shopping-cart"></i></span>
                  </div>
                </div>
              </div>
            </a>
        `;
        featProduct.innerHTML+=product

        // product.addEventListener("click",function(){
        //     console.log(this.id);
            
        // })
        }





        // new arrivel
        for (let i = 0; i < Arrivel.length; i++) {
            let product = `
              <a href="./pages/productDetails.html" id="${Arrivel[i].id}" class="item">
                   <div class="product">
                     <img src="${Arrivel[i].image}" width="100%">
                     <div class="des">
                       <span>adidas</span>
                       <h5>cartoon astronaut t-shirts</h5>
                       <div class="star">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                       </div>
                       <div class="des-fot">
                         <h4>$${Arrivel[i].price}</h4>
                         <span href="#"><i class="fas fa-shopping-cart"></i></span>
                       </div>
                     </div>
                   </div>
                 </a>
             `;
             newArrivelcon.innerHTML+=product;
             }
        
    }

}
xhttp.open("GET", "../data/products.json", true);
xhttp.send();



function get(id){
   found = featurPro.find((ele)=>{
    return ele.id === id
   })
}