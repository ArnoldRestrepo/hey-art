        // Desaparecer/Aparecer menu menu cuando bajo
        $(function() {
            var pA, pN = 0;
            $(window).scroll(function(e){
            e.stopPropagation();
            pN = $(this).scrollTop();

            if(pN > pA){
                $('header').fadeOut();
            } else if(pN < pA){
                $('header').fadeIn();
            }
                pA = pN;
            });
        });

        //Scroll Top
        (function() {
            $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html, body').animate({
                    scrollTop: target.offset().top}, 1000);
                    // return false;
                    }
                }
            });
        })();

        // Cambiar icono del menú
        $(".menu-colapsado").click(function() {
            $(this).toggleClass("menu-expansion");
        });


        
        // "YO AMO"
        (function() {
            //Guardar las palabras en un arreglo
            var palabras = ["El Diseño Web", "HTML5", "jQuery", "CSS3", 
            "JavaScript", "PHP", "Animar", "Ilustrator", "Photoshop"];
            // Iniciar contador en 0
            var i = 0;
            function cambio() {
            // Obtener elemento e iniciar animación
            $("#cambio").fadeOut(300, function() {
                $("#cambio").html(palabras[i]).fadeIn(300);
            });
            // Crear ciclo
            i++;
            // Recargar el ciclo
            if (i == 9) {
                i = 0;
            }
            // Tiempo de la animación e intervalo
            window.setTimeout(cambio, 1700);
            return;
            }
            cambio();
        })();
        