const btnMenu = document.querySelector('.header__btn-menu');
const btnClose = document.querySelector('.header__btn-close');
const menu = document.querySelector('.header__menu');
const arrowFeactures = document.getElementById('arrowFeactures');
const arrowCompany = document.getElementById('arrowCompany');
const listFeactures = document.querySelector('.header__menu__list__sub-list');
const listCompany = document.querySelector('.header__menu__list__sub-list--list2');


btnMenu.addEventListener('click',show); // Añadir evento click al boton de menu
btnClose.addEventListener('click',hidden);//Añadir evento click al boton de cerrar menu

arrowFeactures.addEventListener('click',(e)=>{ //despliegue de la lista de feactures al presionar la flecha
  let event = e;
  showList(arrowFeactures, listFeactures,event);
});
arrowCompany.addEventListener('click',(e)=>{ //despliegue de la lista de feactures al presionar la flecha
  let event = e;
  showList(arrowCompany, listCompany,event);
});

function show() { //funcion para mostrar el menu 
  btnMenu.style.display = 'none'; //oculto el boton del menu
  btnClose.style.display = 'block'; //muestro el boton de cerrar menu
  menu.classList.add('active'); //muesto el menu activo

}

function hidden() {
  btnClose.style.display = 'none'; //oculto el boton de cerrar menu
  btnMenu.style.display = 'block'; //muestro el boton del menu
  menu.classList.remove('active');// oculto el menu activo
}




function showList(nameArrow, nameList,event ) {
  if(event.target.classList.contains('rotate')){
   
    nameArrow.classList.remove('rotate'); 
    nameList.style.display = 'none';    
        
  }else{    
    nameArrow.classList.add('rotate'); 
    nameList.style.display = 'flex';
    
  }



}