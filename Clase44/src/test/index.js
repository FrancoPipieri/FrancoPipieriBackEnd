import axios from "./axios.js";

const getProducts = async () => {
    try {
        const response = await axios.get("/api/test");

        console.log("Server response:", response);
    } catch (err) {
        console.log(err);
    }
};

const createProduct = async () => {
    try {
        const response = await axios.post("/api/test", {
            nombre: "modem",
            thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
            precio: 250.45
        });

        return getProducts();
    } catch (err) {
        console.log(err);
    }
};


const updateProduct = async (id) => {
    try {
        await axios.put("/api/test/642d9d73780e3b6e40b8278d", {
            nombre: "modem",
            thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
            precio: 5550.45
        });

        return getProducts();
    } catch (err) {
        console.log(err);
    }
};

const deleteProduct = async (id) => {
    try {
        await axios.delete("/api/test/642d9d73780e3b6e40b8278d");

        return getProducts();
    } catch (err) {
        console.log(err);
    }
};


getProducts();