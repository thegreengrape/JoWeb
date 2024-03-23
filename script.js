const searchInput = document.getElementById("searchInput");
const search = function () {
  if (searchInput.value === null || searchInput.value === "") return;
  const win = window.open(`https://www.google.com/search?q=${searchInput.value}`, "_self");
};

searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.getElementById("btn").click();
  }
});
