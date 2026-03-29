function scrollToStories() {
    document.querySelector("#stories").scrollIntoView({ behavior: "smooth" });
}

function filterStories(type) {
    const cards = document.querySelectorAll("#storyCard");
    cards.forEach(card => {
        if (type === "all" || type === card.getAttribute('data-type')) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    })
}