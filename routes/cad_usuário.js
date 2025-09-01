const express = require("express");
const router = express.Router();

router.get("/add", async (req, res)=> {
    res.render("base", {
        title: "Adicionar Usuário",
        view: "cad_usuário/add",
    })
});

router.get("/edit", async (req, res)=> {
    res.render("base", {
        title: "Editar Usuário",
        view: "cad_usuário/edit",
    })
});

router.get("/", async (req, res)=> {
    res.render("base", {
        title: "Listar Usuário",
        view: "cad_usuário/show",
    })
});

module.exports = router;