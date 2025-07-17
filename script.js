const lists = document.querySelectorAll(".list");

document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", card.id);
    card.classList.add("dragging");
  });

  card.addEventListener("dragend", () => {
    card.classList.remove("dragging");
  });
});

lists.forEach((list) => {
  list.addEventListener("dragover", (e) => e.preventDefault());

  list.addEventListener("dragenter", (e) => {
    e.preventDefault();
    list.classList.add("drag-over");
  });

  list.addEventListener("dragleave", () => {
    list.classList.remove("drag-over");
  });

  list.addEventListener("drop", (e) => {
    const id = e.dataTransfer.getData("text/plain");
    const card = document.getElementById(id);
    list.appendChild(card);
    list.classList.remove("drag-over");
    updateCardCounts();
  });
});

function updateCardCounts() {
  lists.forEach((list) => {
    const count = list.querySelectorAll(".card").length;
    const counter = list.querySelector(".card-count");
    if (counter) {
      counter.textContent = `${count} Board${count !== 1 ? "s" : ""}`;
    }
  });
}

updateCardCounts();
