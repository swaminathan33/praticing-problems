const things = [
    {
        id:0,
        image:'./ecommerce3_photo1.jfif',
        name:'Ryan Albums',
        price:'$25.00'
    },
    {
        id:1,
        image:'./ecommerce3_photo2.jfif',
        name:'Movie Posters',
        price:'$30.00'
    },
    {
        id:2,
        image:'./ecommerce3_photo3.jfif',
        name:'Happy Ninja',
        price:'$16.00'
    },
    {
        id:3,
        image:'./ecommerce3_photo4.jfif',
        name:'Woo-hoodies',
        price:'$12.00'
    }
]

const things_set = [...new Set(things.map((items) =>{
    return items;
}))]
document.getElementById('products').innerHTML = things_set.map((items) =>{
    var {image, name, price} = items;
    console.log(image);
    return (
        `<div class="boxes">
                <img id="product-image" src="${image}" alt="">
                <div id="product-info">
                    <h4>${name}</h4>
                    <div>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <p >${price}</p>
                    <button class="btn btn-dark">Add to cart</button>
                </div>
            </div>`
    )
}).join('');





`
<div class="boxes ">
                <img id="product-image" src="./bg2.jpg" alt="">
                <div id="product-info">
                    <h4>Happy Ninja</h4>
                    <p >$15.00</p>
                    <button class="btn btn-dark">Add to cart</button>
                </div>
            </div>
            <div class="boxes ">
                <img id="product-image" src="./bg2.jpg" alt="">
                <div id="product-info">
                    <h4>Happy Ninja</h4>
                    <div>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <p >$15.00</p>
                    <button class="btn btn-dark">Add to cart</button>
                </div>
            </div>
            <div class="boxes ">
                <img id="product-image" src="./bg2.jpg" alt="">
                <div id="product-info">
                    <h4>Happy Ninja</h4>
                    <p >$15.00</p>
                    <button class="btn btn-dark">Add to cart</button>
                </div>
            </div>
            <div class="boxes ">
                <img id="product-image" src="./bg2.jpg" alt="">
                <div id="product-info">
                    <h4>Happy Ninja</h4>
                    <p >$15.00</p>
                    <button class="btn btn-dark">Add to cart</button>
                </div>
            </div>
`