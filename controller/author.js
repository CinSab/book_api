const { v4: uuidv4 } = require("uuid");
const middleware = require('../utils/middleware');
const router = require("express").Router();
let dao = require("../dataccess/author");

/* Obtener todo */
router.get("/", (req, res) => {
    res.status(200).json(dao.getAll(req.query));
});

/* Obtener dato especifico */
router.get("/:id", (req, res) => {
    const id = req.params.id;
    const data = dao.getOne(id);

    if (data) {
        res.status(200).json(data);
    } else {
        res.sendStatus(404);
    }
});

/* Agregar un elemento */

router.post("/",middleware.validarUserLogin, (req, res) => {
  const body = { id: uuidv4(), ...req.body };
    
  dao.save(body);
  res.status(200).json(body);
});

/* Eliminar un elemento */

router.delete("/:id",middleware.validarUserLogin, (req, res) => {
    const id = req.params.id;

    if (dao.borrar(id)) {
        res.sendStatus(202);
    } else {
        res.sendStatus(404);
    }
});

/* Modificar un elemento */
router.put("/:id",middleware.validarUserLogin, (req, res) => {
    const id = req.params.id;
    const body = { id: id, ...req.body };
    
    if (dao.update(id, body)) {
        res.sendStatus(202);
    } else {
        res.sendStatus(404);
    }
});

module.exports = router;
