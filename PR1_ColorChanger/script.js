const buttons=document.querySelectorAll('.button');
const body=document.querySelector('body');
// console.log(body);


buttons.forEach((item)=>{
    item.addEventListener('click',(e)=>{

        console.log(e);
       if(e.target.id==='red') 
       {
        body.style.backgroundColor='red'
       } 
       if(e.target.id==='green') 
       {
        body.style.backgroundColor='green'
       } 
       if(e.target.id==='black') 
       {
        body.style.backgroundColor='black'
       } 

       if(e.target.id==='yellow') 
       {
        body.style.backgroundColor='yellow'
       } 
})  })