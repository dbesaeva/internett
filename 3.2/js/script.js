document.getElementById("name-done").onclick = function(e) {
    register(e);
};

document.getElementById("exit").onclick = function () {
    exit();
};

document.getElementById("reset").onclick = function () {
    setCookie("CountVisited", -1);
    location.reload();
};

function register(e) {
    let name = document.getElementById("input-name");
    if (name.value !== "") {
        let date = new Date();
        setCookie("registered", 1);
        setCookie("username", name.value);
        setCookie("CountVisited", 0);
        setCookie("time", date.toUTCString());
        e.preventDefault();
        location.reload();
    } else {
        e.stopPropagation();
    }
}

function exit() {
    deleteCookie();
    document.getElementById("name-done").classList.remove("hidden");
    document.getElementById("exit").classList.add("hidden");
    document.getElementById("reset").classList.add("hidden");
    document.getElementById("input-name").classList.remove("hidden");

    let span = document.getElementById("name-p").children[1];
    document.getElementById("name-p").removeChild(span);

    let Visit = document.getElementById("visit");
    Visit.classList.add("none-data");
    Visit.classList.remove("be-data");
    Visit.innerText = "Еще нет данных";

    let timeVisit = document.getElementById("time-visit");
    timeVisit.classList.remove("be-data");
    timeVisit.classList.add("none-data");
    timeVisit.innerText = "Еще нет данных";
}

function deleteCookie() {
    setCookie("registered", "", {
        expires: -1
    });
    setCookie("username", "", {
        expires: -1
    });
    setCookie("CountVisited", "", {
        expires: -1
    });
    setCookie("time", "", {
        expires: -1
    });
}

function setCookie(name, value) {
    let now = new Date();
    now.setFullYear(now.getFullYear() + 1);
    document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + "; expires=" + now.toGMTString();
}

function timeMath(now, last) {
    let seconds = Math.floor((now - (last)) / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    hours = hours - (days * 24);
    minutes = minutes - (days * 24 * 60) - (hours * 60);
    seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60);
    return `${days} дней, ${hours} часов, ${minutes} минут, ${seconds} секунд назад`;
}

if (getCookie("registered") !== null) {
    document.getElementById("name-done").classList.add("hidden");
    document.getElementById("exit").classList.remove("hidden");
    document.getElementById("reset").classList.remove("hidden");
    document.getElementById("input-name").classList.add("hidden");

    let spanName = document.createElement("span");
    let spanText = document.createTextNode(getCookie("username"));
    spanName.appendChild(spanText);
    document.getElementById("name-p").appendChild(spanName);

    let last = getCookie("time");
    let now = new Date();
    setCookie("time", now.toUTCString());


    let visited = getCookie("CountVisited");
    visited++;
    setCookie("CountVisited", visited);
    let Visit = document.getElementById("visit");
    Visit.classList.remove("none-data");
    Visit.classList.add("be-data");
    Visit.innerText = visited;

    last = new Date(last);
    let timeVisit = document.getElementById("time-visit");
    timeVisit.classList.remove("none-data");
    timeVisit.classList.add("be-data");
    timeVisit.innerText = timeMath(now, last);

}

function getCookie(name) {
    name = encodeURIComponent(name);
    let reg_str = "[^]*" + name + "=([^;]+)";
    let reg = new RegExp(reg_str);
    let cookie = document.cookie;
    cookie = decodeURIComponent(cookie);
    let match = cookie.match(reg);
    if (match === null) {
        return null;
    } else return decodeURIComponent(cookie.match(reg)[1]);
}