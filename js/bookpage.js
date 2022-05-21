fetchData("http://localhost:3000/images");
async function fetchData(url){
    try {
        let res=await fetch(url)
        let data=await res.json();
        console.log(data)
    } catch (error) {
        console.log('error');
    }
}

