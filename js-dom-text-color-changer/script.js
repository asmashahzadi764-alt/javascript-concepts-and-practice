//Select Elements
const heading = document.querySelector("#heading");
const textbtn = document.querySelector("#textbtn");
const redbtn = document.querySelector("#redbtn");
const bluebtn = document.querySelector("#bluebtn");

//Change Text
textbtn.addEventListener("click" , () =>{
    heading.textContent = "DOM Changed Successfully";
});

//Change Color To Red
redbtn.addEventListener("click" , () =>{
    heading.style.color = "red";
})

//Change Color To Blue
bluebtn.addEventListener("click" , () =>{
    heading.style.color = "blue";
})
