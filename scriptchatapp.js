/*
    Autor: Manuel Alejandro Gomez Vazquez
    Universad Interamericana Para El Desarrollo
    Materia: Aplicaciones Moviles para internet
    Profesor: Jesus Alberto Revilla Silva
    Clase 1
    Aplicacion Chat (Whatsapp clon)
 */

function incializarPantallas(){
    //se llenaran las pantallas con informacion de muestra
    //la pestaña de chats se llenara con 16 registros
    for (var i=0;i<4;i++){
        //se manda llamar la funcion que duplica los renglones de la pantalla de los chats
        duplicate();
    }
};

//funcion para duplicar el registro con datos
function duplicate(){
    //se obtiene el elemento row que se encuentra dentro de tabchats
    var row = document.querySelector('.tabchats').innerHTML;
    //concatena la informacion de row, duplicando el renglon
    document.querySelector('.tabchats').innerHTML += row;
};

//funcion para cambiar de pestaña
//Recibe el indice de la pestaña que se esta eligiendo
function activetab(tab){
    //obtiene un arreglo de los elementos html con el id #bottom-line
    var tabestados = document.querySelectorAll('#bottom-line');
    var tabs = document.querySelectorAll('#tabs');
    //se recorre el arreglo para acceder a cada elemento
    for (var i = 0; i<tabestados.length; i++){
        //se elimina el borde inferior para cada uno de los elementos
        tabestados[i].style.borderBottom = '3px solid green';
        tabs[i].style.display = 'none';
        //console.log(tabestados[i]);
    }
    //se agrega borde inferior para la pestaña elegida
    tabestados[tab].style.borderBottom = '3px solid white';
    tabs[tab].style.display = 'block';
};

var lastScrollTop = 0;

function scrollfunction(){
    var header;
    header =  document.querySelector('.header')
    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   if (st > lastScrollTop){
      // downscroll code
      header.style.position = '';
      header.style.top = null;
   } else {
      // upscroll code
      header.style.position = 'sticky';
      header.style.top = 0;
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
};