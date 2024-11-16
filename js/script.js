let total_count = Math.ceil(window.innerWidth/100) * Math.ceil(window.innerHeight/100);
const container = document.querySelector(".background__container");
for(let i = 0; i < total_count + 50; i++){
    const newBox = document.createElement("div");
    newBox.classList.add("box");
    container.appendChild(newBox);
}

const navBtns = document.querySelectorAll(".nav_buttons");
const sections = document.querySelectorAll('.section');
navBtns.forEach((btn) => {
    btn.addEventListener("click", function(){
        navBtns.forEach((el) => {
            el.classList.remove("active");
        });
        btn.classList.add("active");

        const targetSection = btn.dataset.target;
        console.log(targetSection)
        sections.forEach(section => section.classList.remove('active'));
        document.getElementById(targetSection).classList.add('active');
    });
});
document.querySelector("#contact_button").addEventListener("click", () => {
    document.querySelector('[data-target="contact"]').classList.add("active");
})
// let total_count;
// if(window.innerWidth < "600px"){
//     total_count = Math.ceil(window.innerWidth/60) * Math.ceil(window.innerHeight/60);
// }else{
//     total_count = Math.ceil(window.innerWidth/100) * Math.ceil(window.innerHeight/100);
// };
// const container = document.querySelector(".background__container");
// for(let i = 0; i < total_count + 50; i++){
//     const newBox = document.createElement("div");
//     newBox.classList.add("box");
//     container.appendChild(newBox);
// }