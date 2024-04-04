// Pasiimame HTML elemtus iš DOM pagal ID
const addBtn = document.getElementById("add_task");      //<button>
const list = document.getElementById("tasks_list");      // <ul> - elementas
const taskName = document.getElementById("task_name");   // <input>
const clearTasks = document.getElementById("clear_tasks"); // <button> - išvalyti visą sąrašą



// Kintamasis kuriame saugomos užduotys
let tasks = [];

//Funkcija užduočių išsaugojimui
const saveTasks = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// atvaizduoja masyvą kaip sąrašą
const showTasks = () => {
    //Išvalome buvusi sąrašą
    list.innerHTML = "";
    //Su kiekviena užduotimi atliksime veiksmą
    //Kinamasis t - masyvo elemantas (užduotis)
    tasks.forEach((t, i) => {
        // Sukuriam naują objektą (HTMLElement klasės)
        const newTask = document.createElement("li");
        // Objekto atributam priskirame reikšmes
        newTask.className = "list-group-item";
        newTask.textContent = t;
        // Naują objektą patalpiname į DOM (sarašo apačią)
        list.appendChild(newTask);

        //Sukuriame HTML button elementą
        const deleteBtn = document.createElement("button");

        //Priskiriam atributą textConent
        deleteBtn.textContent = "Ištrinti";

        //Stilizuojame mygtuką
        deleteBtn.className = "btn btn-info float-end btn-sm";

        deleteBtn.onclick = () => {

            tasks.splice(i, 1);
            saveTasks();
            showTasks();
        };

        //Mygtuką priskiriame li (newTask) elementui
        newTask.appendChild(deleteBtn);

    });
}

const addTask = () => {
    //Pasiimame užduoties pavadinimą
    const text = taskName.value;
    //Išsaugome užduotį masyve
    tasks.push(text);

    //Išvalome buvusią formą
    taskName.value = "";

    //Atvaizduojami įrašai
    showTasks();

    //Išsaugoti į localstorage
    saveTasks();
}

const clearList = () => {
    //Išvalome masyvą
    tasks = [];

    //Išvalome localstorage
    localStorage.removeItem("tasks");

    //Atvaizduoti iš naujo
    showTasks();
}

addBtn.onclick = addTask;
clearTasks.onclick = clearList;

//Pasiimame iš localstorage informaciją
const lsTasks = localStorage.getItem("tasks");

//Patikriname ar localstorage buvo kintamasis tasks
if (lsTasks != null) {
    tasks = JSON.parse(lsTasks);
    //Jei kintamasis egzistavo, tuomet atvaizduojame užduotis
    showTasks();
}