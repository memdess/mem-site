$(document).ready(function() {
    var font_weights = [300, 400, 600];
    var font_styles = ['normal', 'italic'];
    var logo_text_elem = document.getElementById('logo_text'), text = logo_text_elem.innerHTML, elements = [];

    logo_text_elem.innerHTML = '';

    for (var i = 0; i < text.length; i++) {
        var new_id = 'logo_glyph_'+ i;
        logo_text_elem.innerHTML += '<span class="logo_glyph" id="'+ new_id +'">'+ text.charAt(i) +'</span><style> @media (min-width: 1200px){ .logo_glyph {font-size: 4.7vw;}} @media (min-width: 980px) and (max-width: 1199px) { .logo_glyph {font-size: 15vw;}} @media (min-width: 769px) and (max-width: 979px) { .logo_glyph {font-size: 15vw;}} @media (min-width: 640px) and (max-width: 768px) { .logo_glyph {font-size: 15vw;}} @media (max-width: 639px) { .logo_glyph {font-size: 15vw;}}';
        elements.push(new_id);
    }

    var logo_index = 0;

    setInterval(function() {
        if(randomInt(1, 5) == 5) {
            var logo_index = randomInt(0, elements.length - 1);
            var elem = document.getElementById(elements[logo_index]);
            elem.style.fontWeight = randomElem(font_weights);
            elem.style.fontStyle = randomElem(font_styles);
        }
    }, 50);
});

function hideLogo(animate) {
    animate &= animate | 0;
    $('#logo').animate({opacity: 0},
        {
            duration: 250,
            complete: function() {
                $('#logo').hide();
                var height = $('#top').css({opacity: 0, display: 'block', height: 'auto'}).height();
                $('#body_wrapper').css({top: $('#top').position().top + $('#top').outerHeight(true)});
                $('#top').css({visibility: 'visible'}).animate({opacity: 1}, {duration: 250, complete: function() {
                        $('#body_wrapper').css({display: 'block', opacity: 0}).animate({opacity: 1}, {duration: 500});
                    }
                });
            }
        }
    );
}

function showLogo(animate) {
    animate &= animate | 0;
    $('#body_wrapper').animate({opacity: 0}, {duration: 250})
    $('#top').animate({opacity: 0},
        {
            duration: 250,
            complete: function() {
                $('#top').hide();
                $('#logo').css({visibility: 'visible', display: 'flex', height: '100%'}).animate({opacity: 1}, {duration: 250});
            }
        }
    );
}