const StoreController = require("../controllers/Store.controller")

module.exports = (app) => {
    app.post("/api/stores",  StoreController.createStore )
    app.get("/api/stores", StoreController.getAllStores)
    app.get("/api/stores/:id", StoreController.getOneStore)
    app.put("/api/stores/:id", StoreController.updateStore)
    app.delete("/api/stores/:id", StoreController.deleteStore)
}

