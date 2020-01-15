let items = document.querySelectorAll(".btn");
for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("mouseover", function() {
        for (let j = 0; j < items.length; j++) {
            if (j !== i) {
                items[j].nextElementSibling.classList.add("hidden");
            }
        }
        let list = items[i].nextElementSibling;
        list.classList.remove("hidden");
    });
}

window.addEventListener("click", function() {
    if (!event.target.matches(".btn")) {
        for (let j = 0; j < items.length; j++) {
            items[j].nextElementSibling.classList.add("hidden");
        }
    }
});



