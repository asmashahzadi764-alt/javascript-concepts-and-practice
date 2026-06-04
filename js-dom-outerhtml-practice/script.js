const heading = document.querySelector("#heading");

const changeBtn = document.querySelector("#changeBtn");

changeBtn.addEventListener("click", () => {

    heading.outerHTML =
        "<h2 id='heading'>Element Replaced Successfully</h2>";

});
