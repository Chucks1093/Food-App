function getOrderStorage() {
     return localStorage.getItem("orders") ? JSON.parse(localStorage.getItem("orders")) : [];
}

export default getOrderStorage;