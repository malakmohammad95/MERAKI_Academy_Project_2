

//creating element in html using jquery
const title=$("<h1>Up Loading Image From Local Storage To My Blog </h1>")
const body = $("body");
title.appendTo(body);

const btn1=$("<button> choose file.. </button>")
btn1.appendTo(body);
btn1.css({
    "font-size": "26px",
    color: "red",
    "border-radius": "20%"
  
  });

const input=$("<input>  </input>")
input.appendTo(body);
input.id("myFile")
input.css({
    "font-size": "26px",
    "width":"150"
  });
//=======================================
//selecting using js
document.querySelector("#myFile").addEventListener("change",function(){
    const reader  = new FileReader();
    reader.addEventListener("load",()=>{
     localStorage.setItem("recent-Image",reader.result);
    
    })
    reader.readAsDataURL(this.files[0]);
    
    });

