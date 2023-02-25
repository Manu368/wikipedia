let inputElement = document.getElementById("searchInput");
let displayResultsE = document.getElementById("searchResults");
let spinnerE = document.getElementById("spinner")

function searchdis(result) {


    let {
        title,
        link,
        description
    } = result

    let mainE = document.createElement("div");
    mainE.classList.add("result-item");
    displayResultsE.appendChild(mainE);

    let b = document.createElement("a");
    b.classList.add("result-title");
    b.href = link;
    b.textContent = title;
    b.target = "_blank";
    mainE.appendChild(b);


    let breakE = document.createElement("br");
    mainE.appendChild(breakE);


    let b1 = document.createElement("a");
    b1.classList.add("result-url");
    b1.href = link;
    b1.textContent = link;
    b1.target = "_blank";
    mainE.appendChild(b1);


    let breakE01 = document.createElement("br");
    mainE.appendChild(breakE01);

    let b2 = document.createElement("p");
    b2.classList.add("link-description");
    b2.textContent = description;
    mainE.appendChild(b2);



}


function displayresults(search_results) {
    spinnerE.classList.toggle("d-none");
    for (let result of search_results) {
        searchdis(result);
    }

}


function searchwikipedia(event) {
    if (event.key === "Enter") {
        spinnerE.classList.toggle("d-none");
        displayResultsE.textContent = "";
        let inputE = inputElement.value;

        let url = "https://apis.ccbp.in/wiki-search?search=" + inputE;
        let options = {
            method: "GET",
        }
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsondata) {
                let {
                    search_results
                } = jsondata;
                displayresults(search_results)
            })
    }
}




inputElement.addEventListener("keydown", searchwikipedia);