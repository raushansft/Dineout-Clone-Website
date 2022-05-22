let productDetails=document.querySelector("#product-details");
fetchData();


async function fetchData(){
    try {
        let url="http://localhost:3000/products";
        let res= await fetch(url);
        let data= await res.json();
        // console.log(data);
        // console.log(data[0]);
        displayData(data);
        
    } catch (error) {
        console.log(error, "Error in fatching data");
        
    }

}

function displayData(productDatas){
    productDatas.forEach(product => {
        console.log(product);
        let card=document.createElement("div");

        let _img=document.createElement("img");
        _img.src=product.img;
        

        let _title= document.createElement("p");
        _title.textContent=product.title;

        let _location= document.createElement("p");
        _location.textContent=product.location;

        let _price = document.createElement("p");
        _price.textContent=product.price;

        let _foodType= document.createElement("p");
        _foodType.textContent=product.foodType;

        let _rating= document.createElement("p");
        _rating.textContent=product.rating;
        _img.append(_rating);

        card.append(_img,_title,_location,_price,_foodType,_rating);
        productDetails.append(card);
        
    });
}