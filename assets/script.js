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
