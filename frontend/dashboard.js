const createBtn = document.getElementById("create_btn");
const createMenu = document.getElementById("create_menu");
createBtn.addEventListener("click", function(event){
event.stopPropagation();
createMenu.classList.toggle("hidden");
});

document.addEventListener("click", function(event){

if(!createMenu.contains(event.target) && 
   !createBtn.contains(event.target)){
createMenu.classList.add("hidden");
}
});