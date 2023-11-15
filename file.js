let featurs = document.getElementById("hover-button");
let dropDown = document.getElementById("dropDown");

featurs.addEventListener('mouseover', ()=> {
  dropDown.style.display = "block";
  
})

dropDown.addEventListener('mouseenter', ()=> {
  dropDown.style.display = "block";
  
})
dropDown.addEventListener('mouseout', ()=> {
  dropDown.style.display = "none";

})