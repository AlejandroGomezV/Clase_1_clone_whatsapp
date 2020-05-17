function duplicate(){
    var str_html='';
    var deb = document.querySelector('.row').innerHTML;
    //str_html += str_html;
    console.log(deb);
    str_html += '<div class="row">';
    str_html += deb;
    str_html += '</div>';
    document.querySelector('body').innerHTML += str_html;
};

function activetab(tab){
    var tabestados = document.querySelectorAll('#bottom-line');
    for (var i = 0; i<tabestados.length; i++){
        tabestados[i].style.borderBottom = '3px solid green';
        //console.log(tabestados[i]);
    }
    tabestados[tab].style.borderBottom = '3px solid white';
};