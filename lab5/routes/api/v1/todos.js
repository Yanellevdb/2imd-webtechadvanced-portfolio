const express = require('express');
const router = express.Router();
const apiTodosController= require('../../../controllers/api/v1/messages');

router.get("/", apiTodosController.getAll);

router.get(":id", apiTodosController.getId);

router.post("/", apiTodosController.post); 

router.put(":id", apiTodosController.update);

router.delete(":id", apiTodosController.remove);

module.exports= router;