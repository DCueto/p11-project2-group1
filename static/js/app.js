
document.addEventListener('DOMContentLoaded', initApp);

function initApp(){

  let list = [
    {name: "Michely", id: 1},
    {name: "Andres", id: 2},
    {name: "Santi", id: 3},
    {name: "Alexander", id: 4},
    {name: "Daniel", id: 5},
  ];
  
  /* Elements */

  const listBox = document.querySelector('.content-list');
  const addBtn = document.querySelector('.content-form input[type="submit"]');
  const sacrificeBtn = document.querySelector('.sacrificeBtn');
  const notebook = document.querySelector('.notebook-page');



  /* Event Listeners */

  eventListeners();
  updateHTML();

  function eventListeners(){
    addBtn.addEventListener('click', addOnList);
    listBox.addEventListener('click', removeOnList);
  }



  /* Event Functions */

  function addOnList(e){

    const inputValue = e.target.parentNode.children[0].value;

    // Recorre el array para setear el objectid como el mayor id de la lista
    let objectId = 0;

    list.forEach(i => {
      if(i.id >= objectId){
        objectId = i.id + 1;
      }
    });


    const objectItem = {
      name: inputValue,
      id: objectId,
    }

    list = [...list, objectItem];
    createElementListItem(objectItem);

    console.log(list);

  }

  function removeOnList(e){

    e.preventDefault();

    const li = e.target.parentNode;
    const id = Number.parseInt(li.dataset.id);

    if(e.target.classList.contains('delete-button')){
      console.log("Eliminado el elemento li con id: " + id);
      list = list.filter(item => item.id !== id);
      console.log(list);
      updateHTML();
    }
  }



/* Functions */


  function updateHTML(){

    cleanHTML();

    list.forEach(item => {
      createElementListItem(item);
    });

  }


  function cleanHTML(){

    const ul = listBox.querySelector('ul');

    while(ul.firstChild){
      ul.removeChild(ul.firstChild);
    }

  }


  function createElementListItem(item){
    let el = document.createElement('li');
    el.setAttribute("data-id", item.id);
    el.classList.add("content-list-item");
    el.innerHTML = `
      <p class="content-list-item-name">${item.name}</p>
      <div class="delete-button">-</div>
    `;
    
    listBox.querySelector('ul').appendChild(el);
  }



}