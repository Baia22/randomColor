let button=document.querySelector("button")
let container=document.querySelector("body")

let arr=[1,2,3,4,5,6,7,8,9,0,"a","b","c","d","e","f"]
let randColor="";

button.addEventListener("click", function(){
    randColor=""
    for(i=0;i<6;i++){
        randColor+=arr[Math.floor(Math.random()*16)]
        container.style.backgroundColor= `#${randColor}`;

    }
})



