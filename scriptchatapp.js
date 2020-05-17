/*
    Autor: Manuel Alejandro Gomez Vazquez
    Universad Interamericana Para El Desarrollo
    Materia: Aplicaciones Moviles para internet
    Profesor: Jesus Alberto Revilla Silva
    Clase 1
    Aplicacion Chat (Whatsapp clon)
 */

//funcion para duplicar el registro con datos
function duplicate(){
    var str_html='';
    //se obtiene el elemento row
    var deb = document.querySelector('.row').innerHTML;
    //str_html += str_html;
    //console.log(deb);
    //se agrega concatena un elemento row
    str_html += '<div class="row">';
    str_html += deb;
    str_html += '</div>';
    //se agrega el contenido anterior al body
    document.querySelector('body').innerHTML += str_html;
};

//funcion para cambiar de pestaña
//Recibe el indice de la pestaña que se esta eligiendo
function activetab(tab){
    //obtiene un arreglo de los elementos html con el id #bottom-line
    var tabestados = document.querySelectorAll('#bottom-line');
    //se recorre el arreglo para acceder a cada elemento
    for (var i = 0; i<tabestados.length; i++){
        //se elimina el borde inferior para cada uno de los elementos
        tabestados[i].style.borderBottom = '3px solid green';
        //console.log(tabestados[i]);
    }
    //se agrega borde inferior para la pestaña elegida
    tabestados[tab].style.borderBottom = '3px solid white';
};