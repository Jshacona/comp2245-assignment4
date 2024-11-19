document.getElementById("searchButton").addEventListener("click", function () {
    const query = document.getElementById("searchField").value.trim();
    const xhr = new XMLHttpRequest();


    xhr.open("GET", `superheroes.php?query=${encodeURIComponent(query)}`, true);

    xhr.onload = function () {
        const resultDiv = document.getElementById("result");
        if (xhr.status === 200) {
            resultDiv.innerHTML = xhr.responseText;
        } else {
            resultDiv.innerHTML = "<p>Error fetching superhero information.</p>";
        }
    };

    xhr.send();
});