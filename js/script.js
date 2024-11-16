let total_count = Math.ceil(window.innerWidth/100) * Math.ceil(window.innerHeight/100);
const container = document.querySelector(".background__container");
for(let i = 0; i < total_count + 50; i++){
    const newBox = document.createElement("div");
    newBox.classList.add("box");
    container.appendChild(newBox);
}

const navBtns = document.querySelectorAll(".menu__list li");
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
})