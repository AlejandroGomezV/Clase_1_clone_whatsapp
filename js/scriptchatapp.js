/*
    Autor: Manuel Alejandro Gomez Vazquez
    Universad Interamericana Para El Desarrollo
    Materia: Aplicaciones Moviles para internet
    Profesor: Jesus Alberto Revilla Silva
    Clase 1
    Aplicacion Chat (Whatsapp clon)
 */

document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('#bottom-line').forEach(function (div){
        div.onclick = function(){
            var tabestados = document.querySelectorAll('#bottom-line');
            for (var i = 0; i<tabestados.length; i++){
                tabestados[i].style.borderBottom = '3px solid green';
            }
            div.style.borderBottom = '3px solid white';

            var tabs = document.querySelectorAll('#tabs');
            for (var i = 0; i<tabestados.length; i++){
                tabs[i].style.display = 'none';
                if(tabs[i].dataset.view == div.dataset.view){
                    tabs[i].style.display = 'block';
                }
            }
        };
    });

    var lastScrollTop = 0;
    window.onscroll = function (){    
        var header;
        header =  document.querySelector('.header');
        var menu;
        menu =  document.querySelector('.menu');
        var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
       if (st > lastScrollTop){
          // downscroll code
          header.style.position = '';
          header.style.top = null;
          menu.style.top = 0;
       } else {
          // upscroll code
          header.style.position = 'sticky';
          header.style.top = 0;
          menu.style.top = "40px";
       }
       lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    }

    window.onload = function (){
        //se llenaran las pantallas con informacion de muestra
        //la pestaña de chats se llenara con 16 registros
        for (var i=0;i<4;i++){
            //se manda llamar la funcion que duplica los renglones de la    pantalla de los chats
            duplicate();
        }
    }

    document.querySelectorAll('#appname').forEach(function (div){
        div.onclick = function(){
            duplicate();
        };
    });
});

//document.getElementById('appname').addEventListener("onclick",duplicate());

//funcion para duplicar el registro con datos
function duplicate(){
    //se obtiene el elemento row que se encuentra dentro de tabchats
    var row = document.querySelector('.tabchats').innerHTML;
    //concatena la informacion de row, duplicando el renglon
    document.querySelector('.tabchats').innerHTML += row;

    //proceso para duplicar el elemento row de las llamadas
    var rowllamada = document.querySelector('.tabllamadas').innerHTML;
    document.querySelector('.tabllamadas').innerHTML += rowllamada;
};

//Funciones de la clase anterior
/*
function incializarPantallas(){
    //se llenaran las pantallas con informacion de muestra
    //la pestaña de chats se llenara con 16 registros
    for (var i=0;i<4;i++){
        //se manda llamar la funcion que duplica los renglones de la pantalla de los chats
        duplicate();
    }
};

//funcion para cambiar de pestaña
//Recibe el indice de la pestaña que se esta eligiendo
function activetab(tab){
    //obtiene un arreglo de los elementos html con el id #bottom-line
    var tabestados = document.querySelectorAll('#bottom-line');
    var tabs = document.querySelectorAll('#tabs');
    //console.log(tabs[tab]);
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
    header =  document.querySelector('.header');
    var menu;
    menu =  document.querySelector('.menu');
    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   if (st > lastScrollTop){
      // downscroll code
      header.style.position = '';
      header.style.top = null;
      menu.style.top = 0;
   } else {
      // upscroll code
      header.style.position = 'sticky';
      header.style.top = 0;
      menu.style.top = "40px";
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
};*/

/*
document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('#bottom-line').forEach(function (div){
        div.click = function(){
            console.log(div.dataset.view)
        };
    });

    window.onscroll = function (){
        this.console.log(window.scrollY)
    }
});*/