let cart = [];

function addToCart(element) {
  console.log(element.parentElement.children[2].innerHTML);
  let product = element.parentElement.children[2].innerHTML;
  cart.push(product);
  localStorage.setItem('cart', cart.toString());
}

function fillCartList() {
  let cart = [];
  cart.push(localStorage.getItem('cart'));
  let list = document.getElementById('cart');
  for (let product of cart) {
    let li = document.createElement('li');
    li.innerHTML = product;
    list.append(li);
  }
}

fillCartList();
