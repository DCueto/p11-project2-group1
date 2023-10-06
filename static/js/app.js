
document.addEventListener('DOMContentLoaded', initApp);

function initApp() {

    //lista de nombres
    let names = ["Santi", "Matheus", "Marina", "Daniel", "Michely", "Cora", "Seif", "Alexander", "Isaias", "Chiara", "Karol", "Mauricio", "Julio"];
    let discartedNames = [];
    let discartedNamesSection = document.querySelector(".deadPeople");

    let audio = new Audio("../Resources/l_theme_death_note.mp3");
    audio.volume = 0.1;
    audio.play();

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

    //se especifica donde estará la víctima seleccionada
    let nameDisplay = document.querySelector(".deadPeople");


    updateOriginalNames(names);


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