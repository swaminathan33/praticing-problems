const product = [
    {
        id:0,
        image:"./bg2.jpg",
        name:'sofa',
    },
    {
        id:1,
        image:"./bg2.jpg",
        name:'chair',
    },
    {
        id:2,
        image:"./bg2.jpg",
        name:'rod',
    },
    {
        id:3,
        image:"./bg2.jpg",
        name:'radio',
    }

];

const things = [...new Set(product.map((e) =>{
    return e;
}))]

function display(){
    let i = 0;
    let j = 0;
    document.getElementById('grid-container').innerHTML = things.map((ee) =>{
        
        var {id, image, name} = ee;
        return (
            `<div class="grid-item">
                <img src="${image}" alt="" class="product_image">
                <h3>${name}</h3>
                <button onclick='cartDisplay(`+(i++)+`)'>Add to cart</button>
                <button onclick='del(`+(j++)+`)'>Remove</button>
            </div>`
        )
    }).join('');

}
var cartt = [];

function del(a){
    console.log(a);
    cartt.splice(a,1);
}

function cartDisplay(b){
    cartt.push({...things[b]});
    document.getElementById('cartH1').innerHTML = `<h1>Cart ${cartt.length} </h1>`;
    if (cartt.length == 0){
        document.getElementById('ptag').innerHTML = '<h1>Your cart is empty</h1>';
    }else{
        document.getElementById('ptag').innerHTML = cartt.map((thing) =>{
            var {id, image, name } = thing;
            console.log()
            return (
                `<div class="cart-item">
                <img src="${image}" alt="" class="cart_image">
                <h3>${name}</h3>
                </div>`
            )
        }).join('');
    }
    display();
}

display();