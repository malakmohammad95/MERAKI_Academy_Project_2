

//creating element in html using jquery
const title=$("<h1>Up Loading Image From Local Storage To My Blog </h1>")
const body = $("body");
title.appendTo(body);
//=======================================
//selecting using js
document.querySelector("#myFile").addEventListener("change",function(){
    const reader  = new FileReader();
    reader.addEventListener("load",()=>{
     localStorage.setItem("recent-Image",reader.result);
    
    });
  
        reader.readAsDataURL(this.files[0]);
    });

document.addEventListener("DOMContentLoaded",()=>{

    const recentImageDataUrl=localStorage.getItem("recent-Image");

if(recentImageUrl){
    document.querySelector("#imgPreview").setAttribute("src",recentImageDataUrl);
}
});
//=============================================
const getLike = document.querySelector('.like');
const getLikeNum = document.querySelector('.likeNum');
//=============================================
let like =0;
increaseLike =()=>{
    like++
    getLikeNum.innerHTML=`${like}`
}
likeClick=()=>{
increaseLike()
}
getLike.addEventListener(('click'),likeClick)