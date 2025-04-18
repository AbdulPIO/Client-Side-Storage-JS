function getUserObject() {
    return {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
    };
}

function saveToLocal() {
    const user = getUserObject();
    if (!user.name || !user.email) return alert("Please fill both fields.");
    localStorage.setItem("userData", JSON.stringify(user));
    alert("Saved to LocalStorage!");
}

function saveToSession() {
    const user = getUserObject();
    if (!user.name || !user.email) return alert("Please fill both fields.");
    sessionStorage.setItem("userData", JSON.stringify(user));
    alert("Saved to SessionStorage!");
}

function showStored() {
    const localData = localStorage.getItem("userData");
    const sessionData = sessionStorage.getItem("userData");
    const localParsed = localData ? JSON.parse(localData) : null;
    const sessionParsed = sessionData ? JSON.parse(sessionData) : null;

    document.getElementById("output").innerText =
        `LocalStorage:\n${localParsed ? JSON.stringify(localParsed, null, 2) : "None"
        }\n\n` +
        `SessionStorage:\n${sessionParsed ? JSON.stringify(sessionParsed, null, 2) : "None"
        }`;
}

function clearStorage() {
    localStorage.removeItem("userData");
    sessionStorage.removeItem("userData");
    document.getElementById("output").innerText = "Storage cleared.";
}