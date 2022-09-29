
function getLocalStorage() {
     return localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];
}

export default getLocalStorage;