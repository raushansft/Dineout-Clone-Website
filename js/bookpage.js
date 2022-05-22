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

var today = new Date();
let todayDate=dateFormates(today);
todayDate[2]='Today';
var ul=document.getElementById('ul-container');

displayDates(todayDate);
for(let i=1;i<=40;i++){
    var nextDate=new Date(new Date().setDate(today.getDate()+i));
    let nextDateFormat=dateFormates(nextDate)
    displayDates(nextDateFormat);
}


function dateFormates(date){
    const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    const days=["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    
    return ([monthNames[date.getMonth()],date.getDate(),days[date.getDay()]]);

}

function displayDates(dateFormate){
    console.log(dateFormate);
    var li=document.createElement('li');
    var day=document.createElement('span');
    day.innerText=dateFormate[2];
    var datediv=document.createElement('div');
    datediv.innerText=dateFormate[1];

    li.append(day,datediv);
    ul.append(li);
}


