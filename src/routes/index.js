import express from 'express';
import prescricoes from './/prescricoesRoutes.js'

const routes = (app) =>{
    app.use(
        express.json(),
        prescricoes
    )
}

export default routes;