const localTime=document.getElementById('localTime');
setInterval(function(){
    const date=new Date();
    localTime.innerHTML=`Date:${date.toLocaleDateString()}<br/>LocalTime:${date.toLocaleTimeString()}`;
},1000);

