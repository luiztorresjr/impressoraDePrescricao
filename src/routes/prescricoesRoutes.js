import express from 'express';
import PrescricaoController from '../controllers/prescricaoController.js';

const router = express.Router();

router
    .get('/prescricoes', PrescricaoController.listarTodasPrescricoes)
    .get('/prescricoes/:id', PrescricaoController.imprimePrescricao)


export default router;