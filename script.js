// Example small interaction

document.querySelector(".btn-primary")?.addEventListener("click", function(){

console.log("Start Learning button clicked");

});

// Smooth scroll
document.querySelectorAll("a").forEach(anchor => {
anchor.addEventListener("click", function(e){
if(this.getAttribute("href").startsWith("#")){
e.preventDefault();
document.querySelector(this.getAttribute("href"))
.scrollIntoView({behavior:"smooth"});
}
});
});

// Form validation (login)
const form = document.querySelector("form");

if(form){
form.addEventListener("submit", function(e){

const email = form.querySelector("input[type='email']").value;
const password = form.querySelector("input[type='password']").value;

if(email === "" || password === ""){
e.preventDefault();
alert("Please fill all fields");
}
});
}

// Enroll button interaction
document.querySelectorAll(".course-card button").forEach(btn => {
btn.addEventListener("click", () => {
alert("Course Enrolled Successfully!");
});
});
