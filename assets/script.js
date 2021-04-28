// Scroll suave 

jQuery(document).ready(function($) { 
    $(".scroll").click(function(event){        
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 600);
   });
});


// Frete

function frete(){
    bootbox.alert({
        title: "FRETE KISONHOO",
        message: "FRETE GRÁTIS para compras a partir de R$ 30,00. Válido para bairros próximos ao Centro de Resende, consulte um vendedor.<br>Entregas de segunda a sexta 14h e 19h e sábado 17h.",
        backdrop: true
    });
}

// Horário de funcionamento

function horario(){
    bootbox.alert({
        title: "HORÁRIO DE FUNCIONAMENTO",
        message: "Seg a Sex - 08:00 a 19:00<br>Sábado - 08:00 a 17:00<br>Feriados - 09:00 a 13:00",
        backdrop: true
    });
}


// Barra de navegação responsiva

window.onload = function navSlide() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')

    burger.addEventListener('click', () => {
        //Toggle nav
        nav.classList.toggle('nav-active');

        // Animate links
    navLinks.forEach((link, index) => {
        if(link.style.animation) {
            link.style.animation = "";
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
        }
        
        });
        //Burger Animation
        burger.classList.toggle('toggle');
    });
}

navSlide()

// o "onload" foi necessário pois a função estava sendo executada antes do carregamento do DOM, e por conseguinte a const retornava "null"