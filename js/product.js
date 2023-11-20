// Product Page Image Roll

let productImg = $("#product-img")[0];
let smallImgs = $("[id=small-img]");

for(let smallImg of smallImgs)
{
  smallImg.onclick = function()
  {
    productImg.src = smallImg.src;
  }
}