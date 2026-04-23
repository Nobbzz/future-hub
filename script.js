function showSection(sectionId) {
    let sections = document.getElementsByClassName("section");
    for (let i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
    }

    document.getElementById(sectionId).style.display = "block";
}

function addPost() {
    let text = document.getElementById("postText").value;

    let div = document.createElement("div");
    div.innerText = text;

    document.getElementById("feed").appendChild(div);
}