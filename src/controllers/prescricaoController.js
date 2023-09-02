import prescricoes from '../models/Prescricao.js';
import ModeloPrescricao from '../models/ModeloPrescricao.js';

class PrescricaoController {
    static listarTodasPrescricoes = (req, res)=>{
        if(!prescricoes) console.log('Error');
        res.status(200).json(prescricoes)
    }

    static imprimePrescricao = (req, res) =>{
        
        const id = req.params.id;
        var prescricao = prescricoes.find(i => i.numeroPrescricao == id);
        ModeloPrescricao.imprimirPrescricao(prescricao);
        if(!prescricao) console.log('Error');
        res.status(200).send('Arquivo criado com sucesso')
    }
}

export default PrescricaoController;