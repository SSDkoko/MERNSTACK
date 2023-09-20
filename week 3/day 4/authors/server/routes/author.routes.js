const authorController = require("../controller/author.controller")


module.exports = (app) => {
    app.post("/api/author",  authorController.createauthor )
    app.get("/api/author", authorController.getAllauthors)
    app.get("/api/author/:id", authorController.getOneauthor)
    app.put("/api/author/:id", authorController.updateauthor)
    app.delete("/api/author/:id", authorController.deleteauthor)
}