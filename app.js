document.getElementById('Search Button').addEventListener('click', function(){
const url = "superheroes.php?action=getSuperheroes";
fetch(url)
.then(response => response.json())
.then(superheroes => {
let superheroNames = superheroes.map(hero => hero.name).join(', ');
alert("Superheroes: " + superheroNames);
})
.catch(error => {
alert("An error occurred.");
});
});
