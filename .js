let names = ["Santi", "Matheus", "Marina", "Daniel", "Seif", "Michely", "Cora", "Julio", "Mauricio", "Isaias", "Andres", "Chiara", "Karol"];

let nameSection = document.querySelector(".nameSection");


for (let name of names) {
    nameSection.insertAdjacentHTML("beforreend", '<p>${name}</p>')
}

document.getElementById("sacrificeButton").onclick = function () {


    let name;


    if (names.lenght === 0) {
        name = "Game Over"
    } else {

        let number = Math.floor(Math.random() * names.lenght);
        console.log("Ha salido el numero" + number);


        name = names.splice(number, 1);


        name = names.splice(number, 1)[0];
        console.log("pantalla" + number + "corresponde a " + name)




    }

    document.getElementById("notebook").innerHTML = name;
}

