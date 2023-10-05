
document.addEventListener('DOMContentLoaded', initApp);

function initApp(){


  /* Variables */

  let list = [
    {name: "Michely", id: 1},
    {name: "Andres", id: 2},
    {name: "Santi", id: 3},
    {name: "Alexander", id: 4},
    {name: "Daniel", id: 5},
  ];

  let sacrificedItems = [];

  /* Elements */

    /* Containers */
  const listBox = document.querySelector('.content-list');
  const notebook = document.querySelector('.notebook-page');
  const ul = listBox.querySelector('ul');


    /* Buttons */

  const addBtn = document.querySelector('.content-form input[type="submit"]');
  const sacrificeBtn = document.querySelector('.sacrificeBtn');

  

  /* Event Listeners */

  eventListeners();

  function eventListeners(){
    addBtn.addEventListener('click', addOnList);
    listBox.addEventListener('click', removeOnList);
    sacrificeBtn.addEventListener('click', randomSacrifice);
  }

  // Init app
  updateHTML(ul);
  updateHTML(notebook);



  /* Event Functions */

  function addOnList(e){

    // Picks a string of the input value
    const inputValue = e.target.parentNode.children[0].value;

    // Recorre el array para setear el objectid como el mayor id de la lista
    let objectId = 0;
    list.forEach(i => {
      if(i.id >= objectId){
        objectId = i.id + 1;
      }
    });

    // Creates an object and then push it into an array
    const objectItem = {
      name: inputValue,
      id: objectId,
    }
    list = [...list, objectItem];

    // Create an element based on that object and push it to a container html
    createElementListItem(objectItem, ul);

  }

  function removeOnList(e){

    e.preventDefault();

    // Pick a li and parse the id of that same li
    const li = e.target.parentNode;
    const id = Number.parseInt(li.dataset.id);

    // Checks if we are clicking into the delete-button
    if(e.target.classList.contains('delete-button')){
      // Rewrite the list array without that element with a coincident id
      list = list.filter(item => item.id !== id);
      updateHTML(ul);
    }
  }


  function randomSacrifice(e){

    // Generate a random number between 0 and the lenght of an array
    const randomIndex = Math.floor(Math.random() * list.length);

    // Delete an item of the array based on randomIndex number
    let sacrificedItem;
    sacrificedItem = list.splice(randomIndex, 1);

    // Push that deleted item into the array of deleted items
    sacrificedItem = sacrificedItem[0];
    sacrificedItems = [...sacrificedItems, sacrificedItem];

    // updates both html containers
    updateHTML(ul);
    updateHTML(notebook);

  }



/* Functions */


// Prints all elements of an array

  function updateHTML(el){

    cleanHTML(el);

    if (el.classList.contains('content-list-ul')){
      list.forEach(item => {
        createElementListItem(item, ul);
      });
    } else if (el.classList.contains('notebook-page')){
      sacrificedItems.forEach(item => {
        createElementListItem(item, notebook);
      });
    }

  }


  // Remove all child elements of a parent container

  function cleanHTML(el){

    while(el.firstChild){
      el.removeChild(el.firstChild);
    }

  }

  // Create a HTML element based on a object data. Add this element into a container element

  function createElementListItem(item, container){

    // Check the container to push the correct element
    if (container.classList.contains('content-list-ul')){

      let el = document.createElement('li');
      el.setAttribute("data-id", item.id);
      el.classList.add("content-list-item");
      el.innerHTML = `
        <p class="content-list-item-name">${item.name}</p>
        <div class="delete-button">-</div>
      `;

      container.appendChild(el);

    } else if(container.classList.contains('notebook-page')){
      let el = document.createElement('div');
      el.setAttribute("data-id", item.id);
      el.classList.add("notebook-item");
      el.innerHTML = `
      <p class="notebook-item-name">${item.name}</p>
      
      `;

      container.appendChild(el);
    }
  }



}