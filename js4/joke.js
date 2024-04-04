let x = 1;
async function loadJoke() {
    //console.log("Parsiuntimas prasidejo");
    const tmp = await fetch("https://v2.jokeapi.dev/joke/Any?type=single");
    const joke = await tmp.json();
    console.log(`Kategorija ${joke.category}`)
    console.log(joke.joke);
    //console.log("Parsiuntimas baigtas");
}

//console.log("Pirma instrukcija");
loadJoke();
//console.log("Programa baigta");