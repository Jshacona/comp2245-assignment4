document.getElementById("searchButton").addEventListener("click", function () {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "superheroes.php", true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            alert(xhr.responseText);
        } else {
            alert("Error fetching superhero information.");
        }
    };

    xhr.send();
});


