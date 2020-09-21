$('div a').click(function(e){
  e.preventDefault();

      var id = $(this).attr('href'),

      targetOffset = $(id).offset().top;

      $('html, body').animate({
        scrollTop: targetOffset -70
      }, 800)

      console.log(targetOffset);
});

$(document).ready(function() {

n = 0; // número incrementado
t = ""; // letra incrementada
v = 200; // velocidade do texto
var texto = "Software do seu jeito.";
function alerta() {
t+=texto.charAt(n);
if(n > texto.length) {
return false;
}
setTimeout(function() {
alerta();
}, v);
$('.efeito-texto').html(t);
n++;
}
setTimeout(function() {
alerta();
}, v);

});
//botao scroll top
jQuery(document).ready(function(){

jQuery("#subirTopo").hide();

jQuery('a#subirTopo').click(function () {
         jQuery('body,html').animate({
           scrollTop: 0
         }, 800);
        return false;
   });

jQuery(window).scroll(function () {
         if (jQuery(this).scrollTop() > 1000) {
            jQuery('#subirTopo').fadeIn();
         } else {
            jQuery('#subirTopo').fadeOut();
         }
     });
});
