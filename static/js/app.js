
document.addEventListener('DOMContentLoaded', initApp);

function initApp() {

    //lista de nombres
    let names = ["Santi", "Matheus", "Marina", "Daniel", "Michely", "Cora", "Seif", "Alexander", "Isaias", "Chiara", "Karol", "Mauricio", "Julio"];
    let discartedNames = [];
    let discartedNamesSection = document.querySelector(".deadPeople");


    //lista de nombres
    let nameSection = document.querySelector(".nameSection ul");
    let name;
    function updateDiscartedNames(list) {
        for (let name of list) {
            // appendChild
            discartedNamesSection.insertAdjacentHTML("beforeend", `<p>${name}</p>`)
        }
    }
    function updateOriginalNames(list) {
        for (let name of names) {
            // appendChild
            nameSection.insertAdjacentHTML("beforeend", `<li>${name}</li>`)
        }

    }
    function borrarListaDeNombres() {
        // buscar una manera más eficiente
        nameSection.innerHTML = "";
    }

    function borrarNombresDescartados() {
        discartedNamesSection.innerHTML = "";
    }

    //let names = [];

    //se especifica donde estará la víctima seleccionada
    let nameDisplay = document.querySelector(".deadPeople");

    /*document.getElementById("addButton").onclick = function () {
        let newName = document.getElementById("namefield").value;
        nameSection.insertAdjacentHTML("beforeend", `<li>${newName}</li>`);
        document.getElementById("namefield").value = "";
    }*/

    updateOriginalNames(names);

    //updateOriginalNames(names);

    //click en #sacrificeButton
    document.getElementById("sacrificeButton").onclick = function () {
        //miramos si la lista está vacía
        console.log("name length " + names.length);
        let number = Math.floor(Math.random() * names.length);
        name = names.splice(number, 1)[0];
        console.log(name);
        borrarListaDeNombres();
        updateOriginalNames(names);
        borrarNombresDescartados();
        discartedNames = [...discartedNames, name];
        updateDiscartedNames(discartedNames);
        // el nombre se muestra en el elementro HTML
    }

}