document.getElementById("loadBtn").addEventListener("click", () => {
  const spinner = document.getElementById("spinner");
  const userList = document.getElementById("userList");
  const searchBox = document.getElementById("searchBox");

  spinner.style.display = "block";
  userList.innerHTML = "Loading...";
  searchBox.style.display = "none";

  setTimeout(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        spinner.style.display = "none";
        userList.innerHTML = "";

        data.forEach((user) => {
          const li = document.createElement("li");
          li.textContent = user.name;
          li.style.cursor = "pointer";
          li.addEventListener("click", () => {
            window.location.href = `details.html?id=${user.id}`;
          });

          userList.appendChild(li);
        });

        searchBox.style.display = "block";
      });
  }, 2000);
});
