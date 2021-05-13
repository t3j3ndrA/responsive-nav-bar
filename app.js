let openBtn = document.querySelector(".open");
let closeBtn = document.querySelector(".close");
let list = document.querySelector(".list");

console.log(list)
openBtn.addEventListener("click",function(){
    list.classList.remove("remove");
    list.classList.add("show");
});

closeBtn.addEventListener("click",function(){
    list.classList.remove("show");
    list.classList.add("remove");
})