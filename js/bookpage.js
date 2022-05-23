

getData();
async function getData(){
        var url=" http://localhost:3000/restaurent"
        var data=await fetchData(url);
        
        let found=data.find(el=>el.id===1);
        displayData(found);
   
}

async function fetchData(url){
    try {
        let res=await fetch(url)
        let data=await res.json();
        return data;
    } catch (error) {
        console.log('error');
    }
}


function displayData(data){
    var image=data.images;
    var img=document.getElementById('image-slider-image');

    img.src=data.images[0];

    var imgModal=document.getElementById('image-modal');
    var modalImg=document.getElementById('modal-img'); 
    var closeImgModal=document.getElementById('close');
    img.addEventListener('click',function(){
        imgModal.style.display="block";
        modalImg.src=img.src;
    });
    closeImgModal.addEventListener('click',function(){
        imgModal.style.display="none"
    });
    let i=0
    document.getElementById("right-arrow").addEventListener('click',function(){
        if(i<image.length-1){
                img.src=image[i+1];
                i++;
            }
    })
    document.getElementById("left-arrow").addEventListener('click',function(){
       if(i>0){
        img.src=image[i-1];
        i--;
       }
    })
    
}


const dateSlideRight=document.getElementById('date-slide-right');
const dateSlideLeft=document.getElementById('date-slide-left');
var dateContainer=document.getElementById('dates');
var ul=document.getElementById('ul-container');

dateSlideRight.addEventListener('click',function(){
    dateContainer.scrollLeft +=60;
});
dateSlideLeft.addEventListener('click',function(){
    dateContainer.scrollLeft -= 60;
});

var today = new Date();
let todayDate=dateFormates(today);
todayDate[2]='Today';



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
    var li=document.createElement('li');
    var day=document.createElement('span');
    day.innerText=dateFormate[2];
    var datediv=document.createElement('div');
    datediv.innerText=dateFormate[1];

    li.append(day,datediv);
    ul.append(li);
    
}


var emailaddress=document.getElementById('email-address')
emailaddress.addEventListener('click',function(){
    emailaddress.style='none';
    emailaddress.style.marginBottom='0px';
    var inputEmail=document.getElementById('email');
    inputEmail.style.display='block';
    var AddemailIcon=document.getElementById('email-add-icon');
    AddemailIcon.style.display="none"
    var AddemailText=document.getElementById('add-email-text');
    AddemailText.style.display='none';
});
var specialreq=document.getElementById('special-request');
specialreq.addEventListener('click',function(){
    specialreq.style='none';
    specialreq.style.marginBottom='0px';
    var inputReq=document.getElementById('request');
    inputReq.style.display='block';
    var AddReqIcon=document.getElementById('request-add-icon');
    AddReqIcon.style.display="none"
    var AddReqText=document.getElementById('add-request-text');
    AddReqText.style.display='none';
});