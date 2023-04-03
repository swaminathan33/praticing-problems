const products = [
    {
        id:0,
        name:'Enm Leather Jackets L-size',
        image:'./ecommerce3_photo4.jfif'
    },
    {
        id:1,
        name:'Enm Leather Jackets L-size',
        image:'./ecommerce3_photo4.jfif'
    },
    {
        id:2,
        name:'Enm Leather Jackets L-size',
        image:'./ecommerce3_photo4.jfif'
    },
    {
        id:3,
        name:'Enm Leather Jackets L-size',
        image:'./ecommerce3_photo4.jfif'
    },
    {
        id:4,
        name:'Enm Leather Jackets L-size',
        image:'./ecommerce3_photo4.jfif'
    }
    
];

const products_set = [...new Set(products.map((items) =>{
    return items;
}))];

document.getElementById('products').innerHTML = products_set.map((items) =>{
    var {id,name,image} = items;
    console.log(image);
    return(
        `<div class="box">
        <img src="${image}" alt="">
        <div class="contents">
            <span>${name}</span>
            <span>$1414</span>
        </div>
        <div class='gap'>
            <button class='btn btn-primary'>Buy</buttton>
            <button class='btn btn-secondary'>Add to Cartt</buttton>
        </div>
    </div>`
    )
}).join('');