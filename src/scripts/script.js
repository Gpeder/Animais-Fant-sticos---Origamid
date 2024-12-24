const drops = document.querySelectorAll(".arrow");

drops.forEach(dropdown => {
    dropdown.addEventListener("click", () => {
        const body = dropdown.parentElement.nextElementSibling; 
        dropdown.classList.toggle("active");
        body.classList.toggle("active");

        if (dropdown.classList.contains("active")) {
            dropdown.style.transform = "rotate(180deg)";
        } else {
            dropdown.style.transform = "rotate(0deg)";
        }
    });
});

const img = document.querySelector('img');

function callback(e){
    console.log(e);
}

img.addEventListener('click', callback);

const tabmenu = document.querySelectorAll('.js-tabmenu li');
const tabcontent = document.querySelectorAll('.js-tabcontent section');
tabcontent[0].classList.add('active');

if(tabmenu.length && tabcontent.length){
    function activeTab(index){
        tabcontent.forEach((section)=>{
            section.classList.remove('active');
        });
        tabcontent[index].classList.add('active');
    }
    
    tabmenu.forEach((itemMenu, index)=>{
        itemMenu.addEventListener('click', function(){
            activeTab(index);
        })
    })
}

const linksinternos = document.querySelectorAll('.js-menu a[href^="#"]');


scrolltosection = (event) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

linksinternos.forEach((link) => {
    link.addEventListener('click', scrolltosection);
});


const numeros = document.querySelectorAll('[data-numero]');

numeros.forEach((numero) => {
    const total = +numero.innerText;
    const incremento = Math.ceil(total / 100);
    let start = 0;

    const timer = setInterval(() => {
        start= start + incremento;
        numero.innerText = start;
        if (start >= total) { 
            numero.innerText = total;

            clearInterval(timer);
        }
    }, 50);
});
