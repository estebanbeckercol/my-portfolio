const hiddenElements = document.querySelectorAll(".hidden");
const links = document.querySelectorAll(".link");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");

            links.forEach((link)=>{
                
                const href = link.getAttribute("href").split("#")[1];
                const id = entry.target.id;

                if(href === id){
                    link.classList.add("link--active");
                } else {
                    link.classList.remove("link--active");
                }
            })
        } else {
            entry.target.classList.remove("show");
        }
    })
}, {
    threshold: 0.5, 
})

hiddenElements.forEach((element)=>observer.observe(element));


//menu show

const iconShowMenu = document.querySelector(".iconShowMenu");
const navbarMenu = document.querySelector(".navbar__menu");


iconShowMenu.addEventListener('click', () => {
    navbarMenu.classList.toggle("navbar__menu--show");
})




