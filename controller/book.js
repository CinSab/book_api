const { v4: uuidv4 } = require("uuid");
const middleware = require('../utils/middleware');
const router = require("express").Router();
let dao  = require("../dataccess/book");

/* Obtener todos los elementos */
router.get("/", (req, res) => { 
  res.status(200).json(dao.getAll(req.query));
});

/* Obtener un elemento especifico x ID*/
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

router.post("/", middleware.validarUserLogin,(req, res) => {
  let updateDate = req.params.updateDate;
  const body = { id: uuidv4(), ...req.body, createDate: new Date().toString(), updateDate: updateDate };
  dao.save(body);
  res.status(200).json(body);
});

/* Eliminar un elemento x ID */

router.delete("/:id", middleware.validarUserLogin, (req, res) => {
  const id = req.params.id;  

  if (dao.borrar(id)) { 
    res.sendStatus(202);
  } else {
    res.sendStatus(404);
  }
});

/* Modificar un elemento x ID */
router.put("/:id", middleware.validarUserLogin, (req, res) => {
  const id = req.params.id;
  const createDate = req.params.createDate;
  const body = { id: id, ...req.body, createDate: createDate , updateDate: new Date().toString() };

  if (dao.update(id, body, createDate) ) { 
    res.sendStatus(202);
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;
