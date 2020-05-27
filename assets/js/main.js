document.getElementsByClassName("btn-share")[0].addEventListener("click",function(){
    document.getElementsByClassName("share-it")[0].classList.add("active");
});
document.getElementById("close").addEventListener("click",function(){
    document.getElementsByClassName("share-it")[0].classList.remove("active");
});
