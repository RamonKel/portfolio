$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1, // Quantidade de itens visíveis por vez
        loop: true, // Habilita o loop
        margin: 10, // Espaço entre os itens
        autoplay: true, // Inicia o carrossel automaticamente
        autoplayTimeout: 3000, // Intervalo entre as transições
        nav: true, // Mostra setas de navegação
        dots: true, // Mostra os pontos de navegação
    });
});
