const form=document.querySelector('form');

form.addEventListener('submit', (e)=>{
       e.preventDefault();
       if(e.target.querySelector('input[type="submit"]').type==='submit')
       {
            let height=parseInt(document.querySelector('#height').value);
            let weight=parseInt(document.querySelector('#weight').value);
            let output=document.querySelector('#output');

            if(height>0 && weight>0 && !isNaN(height) && !isNaN(weight))
            {
             let result=(weight*10000)/(height*height);
              output.innerHTML=`Your BMI value is::${result.toFixed(1)} <br /> Please verify with given below standard values`;
            }
            else
                output.innerHTML="Please Enter Valid height and weight";
       }
})