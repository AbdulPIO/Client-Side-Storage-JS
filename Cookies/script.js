function setCookie() {
    const user = {
        name: document.getElementById("cookieName").value,
        age: document.getElementById("cookieAge").value,
    };
    if (!user.name || !user.age) return alert("Please fill both fields.");
    const cookieValue = encodeURIComponent(JSON.stringify(user));
    document.cookie = `user=${cookieValue}; max-age=3600; path=/`;
    alert("Cookie set for 1 hour.");
}

function getCookie() {
    const cookies = document.cookie.split("; ");
    let userCookie = cookies.find((c) => c.startsWith("user="));
    if (userCookie) {
        const value = decodeURIComponent(userCookie.split("=")[1]);
        const userObj = JSON.parse(value);
        document.getElementById("cookieResult").innerText = JSON.stringify(
            userObj,
            null,
            2
        );
    } else {
        document.getElementById("cookieResult").innerText =
            "No user cookie found.";
    }
}

function deleteCookie() {
    document.cookie =
        "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.getElementById("cookieResult").innerText = "Cookie deleted.";
}