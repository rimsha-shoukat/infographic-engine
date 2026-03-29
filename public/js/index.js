function scrollToStories() {
    document.querySelector("#stories").scrollIntoView({ behavior: "smooth" });
};

function filterStories(type) {
    const cards = document.querySelectorAll("#storyCard");
    cards.forEach(card => {
        if (type === "all" || type === card.getAttribute('data-type')) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    })
};

function changeChart(type) {
    const buttons = document.querySelectorAll("#chartBtn");
    buttons.forEach(btn => {
        if (btn.getAttribute("data-type") === type) {
            btn.classList.add("bg-black");
            btn.classList.remove("bg-transparent");
        } else {
            btn.classList.add("bg-transparent");
            btn.classList.remove("bg-black");
        }
    })
};