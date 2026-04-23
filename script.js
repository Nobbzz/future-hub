function addPost() {
    let text = document.getElementById("postText").value;

    if (text.trim() === "") return;

    let div = document.createElement("div");
    div.style.background = "#1e293b";
    div.style.padding = "10px";
    div.style.marginTop = "10px";
    div.style.borderRadius = "8px";

    div.innerText = text;

    document.getElementById("feed").prepend(div);

    document.getElementById("postText").value = "";
}