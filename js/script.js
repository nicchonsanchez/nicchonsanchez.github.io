// Ancora - Scroll suave
var $doc = $('html, body');
$('a').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top //- document.querySelector('body header').getBoundingClientRect().height // Estou subtraindo a altura do menu
    }, 500);
    return false;
});


// Menú fixo | Botão home
menu = document.querySelector('header');
homeButton = document.querySelector('.back-to-top');
menu.style.display = 'none';
homeButton.style.display = 'none';

document.addEventListener('scroll', function(e) {
    lastKnownScrollPosition = window.scrollY;
    menuAtivar = 200;
  
    // MENU
    if (lastKnownScrollPosition > menuAtivar && $('body').width() > 768) {
        if(menu.style.display == 'none'){
            menu.style.top = '-50px'
            setTimeout(
                function(){
                    menu.style.display = 'block';
                }
            , 100)
            setTimeout(
                function(){
                    menu.style.top = '0px'
                }
            , 200)
        }
    } else {
        if(menu.style.display == 'block'){
            menu.style.top = '-100px'
            setTimeout(
                function(){
                    menu.style.display = 'none'
                }
            , 200)
        }
    }

    // Botão HOME
    if (lastKnownScrollPosition > menuAtivar && $('body').width() <= 768) {
        if(homeButton.style.display == 'none'){

            homeButton.style.display = 'block'
            setTimeout(
                function(){
                    homeButton.style.opacity = '1';
                }
            , 100)
        }
    } else {
        if(homeButton.style.display == 'block'){

            homeButton.style.opacity = '0';
            setTimeout(
                function(){
                    homeButton.style.display = 'none';
                }
            , 200)
        }
    }
});

