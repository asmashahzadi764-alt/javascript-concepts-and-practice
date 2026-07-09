// Select Elements
const output = document.querySelector("#output");

const eventLoopBtn = document.querySelector("#eventLoopBtn");
const callbackBtn = document.querySelector("#callbackBtn");
const promiseBtn = document.querySelector("#promiseBtn");
const asyncBtn = document.querySelector("#asyncBtn");
const fetchBtn = document.querySelector("#fetchBtn");

// Event Loop
eventLoopBtn.addEventListener("click", () => {

    output.innerHTML = "";

    output.innerHTML += "<p>1. Start</p>";

    setTimeout(() => {

        output.innerHTML += "<p>3. setTimeout Executed</p>";

    }, 2000);

    output.innerHTML += "<p>2. End</p>";

});

// Callback Function
function greet(name, callback) {

    output.innerHTML = `<p>Hello ${name}</p>`;

    callback();

}

function showMessage() {

    output.innerHTML += "<p>Welcome to Callback Function.</p>";

}

callbackBtn.addEventListener("click", () => {

    greet("Asma", showMessage);

});

// Promise
promiseBtn.addEventListener("click", () => {

    output.innerHTML = "<p>Loading...</p>";

    const myPromise = new Promise((resolve) => {

        setTimeout(() => {

            resolve("Promise Resolved Successfully!");

        }, 2000);

    });

    myPromise.then((message) => {

        output.innerHTML = `<p>${message}</p>`;

    });

});

// Async / Await
function fetchData() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve("Data Received Successfully!");

        }, 2000);

    });

}

asyncBtn.addEventListener("click", async () => {

    output.innerHTML = "<p>Waiting for Data...</p>";

    const data = await fetchData();

    output.innerHTML = `<p>${data}</p>`;

});

// Fetch API
fetchBtn.addEventListener("click", async () => {

    output.innerHTML = "<p>Loading Users...</p>";

    try {

        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        const users = await response.json();

        let result = "<h2>Users List</h2>";

        users.forEach((user) => {

            result += `
                <p>
                    <strong>${user.name}</strong><br>
                    📧 ${user.email}
                </p>
                <hr>
            `;

        });

        output.innerHTML = result;

    } catch (error) {

        output.innerHTML = "<p>Something went wrong!</p>";

        console.log(error);

    }

});