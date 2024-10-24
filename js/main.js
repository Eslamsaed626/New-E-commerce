const mainImag = document.querySelector(".product-img .main-img");
const smallImag = document.querySelectorAll(".small-img img");





// product details main image
smallImag.forEach((img)=>{
    img.addEventListener("click",function(){
        console.log(img.src);
        imgSrc = img.src;
        mainImag.src = imgSrc;
    })
})