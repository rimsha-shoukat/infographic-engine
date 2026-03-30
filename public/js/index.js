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
    console.log(type);
    const buttons = document.querySelectorAll("#chartBtn");
    const charts = document.querySelectorAll("#typeCharts > div");
    buttons.forEach(btn => {
        if (btn.getAttribute("data-type") === type) {
            btn.classList.add("bg-black");
            btn.classList.remove("bg-transparent");
        } else {
            btn.classList.add("bg-transparent");
            btn.classList.remove("bg-black");
        }
    });
    charts.forEach(chart => {
        console.log(chart.getAttribute("data-type"), "===", type);
        if (chart.getAttribute("data-type") === type) {
            chart.classList.remove("hidden");
            chart.classList.add("block");
        } else {
            chart.classList.remove("block");
            chart.classList.add("hidden");
        }
    })
};