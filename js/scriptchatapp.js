/*
    Autor: Manuel Alejandro Gomez Vazquez
    Universad Interamericana Para El Desarrollo
    Materia: Aplicaciones Moviles para internet
    Profesor: Jesus Alberto Revilla Silva
    Clase 1
    Aplicacion Chat (Whatsapp clon)
 */

//Configuracion para Firebase
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAOjJh5tLTxrrSMMcmzg10hQLHAPJInAjk",
    authDomain: "chatapp-2a11f.firebaseapp.com",
    databaseURL: "https://chatapp-2a11f.firebaseio.com",
    projectId: "chatapp-2a11f",
    storageBucket: "chatapp-2a11f.appspot.com",
    messagingSenderId: "157134947168",
    appId: "1:157134947168:web:3304e879a09e45931a5405",
    measurementId: "G-PCW5869LNL"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();
//db.settings ({ timestampsInSnapshots: true });
//fin configuracion firebase

//crea un row con la informacion del chat
function renderChat(doc){
    //crea los elementos
    let divrow = document.createElement('div');
    let divicon = document.createElement('div');
    let img = document.createElement('img');
    let divcontent = document.createElement('div');
    let divtoprow = document.createElement('div');
    let divchatname = document.createElement('div');
    let divtimedate = document.createElement('div');
    let divbottomrow = document.createElement('div');
    let divcontactname = document.createElement('div');
    let divstatus = document.createElement('div');

    //define los atributos
    divrow.setAttribute('class', "row");
    divrow.setAttribute('data-id', doc.id);
    divicon.setAttribute('class', "icon");
    img.setAttribute('src',"images/black-power-button-1428134_640.png");
    img.setAttribute('alt', "Avatar");
    img.setAttribute('height', "30px");
    img.setAttribute('width', "30px");
    divcontent.setAttribute('class', "content");
    divtoprow.setAttribute('class', "top-row");
    divchatname.setAttribute('class', "chatname");
    divtimedate.setAttribute('class', "timedata");
    divbottomrow.setAttribute('class', "bottom-row");
    divcontactname.setAttribute('class', "contactname");
    divstatus.setAttribute('class',"status");

    //define la jerarquia de los elementos
    divrow.appendChild(divicon);
    divicon.appendChild(img);
    divrow.appendChild(divcontent);
    divcontent.appendChild(divtoprow);
    divcontent.appendChild(divbottomrow);
    divtoprow.appendChild(divchatname)
    divtoprow.appendChild(divtimedate);
    divbottomrow.appendChild(divcontactname)
    divbottomrow.appendChild(divstatus);

    //se define la informacion que se muestra desde el documento de firebase
    divchatname.textContent = doc.data().from;
    divtimedate.textContent = doc.data().timestamp.toDate().toLocaleString();
    divcontactname.textContent = doc.data().message;
    divstatus.textContent = "1";
    
    //se agrega el nuevo row
    document.querySelector('.tabchats').appendChild(divrow);
}

//obtiene una captura de la coleccion chat
db.collection('chat').orderBy('timestamp').get().then((snapshot) => {
    console.log(snapshot.docs);
    //recorre los documentos de la coleccion
    snapshot.docs.forEach(doc => {
        //console.log(doc.data());
        renderChat(doc);
    });
});

document.addEventListener('DOMContentLoaded', function(){
    //añade el evento onclick a los botones de las diferentes pantallas
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

    //funcion para manejar el header al momento de hacer scroll
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
    };

    document.querySelectorAll('#appname').forEach(function (div){
        div.onclick = function(){
            duplicate();
        };
    });
});

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