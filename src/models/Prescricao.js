
import moment from 'moment'

const prescricoes = [
    {
        numeroPrescricao: 'PRESC1-621',
        dataImpresao: moment().format("DD/MM/YYYY hh:mm:ss"),
        nomePaciente: 'PACIENTE TESTE',
        setor: 'ESPERA-PENDENCIAS ALTA MEDICA/C3-125-HUB',
        atendimento: 2450522,
        horario: '12:00',
        medicamentos: [
            {
                dose: '01',
                nome: 'ACETILCISTEINA AMP 100MG',
                formaAdministracao: 'VIA ORAL'
            }, 
            {
                dose: '01',
                nome: 'FUROSEMIDA AMP 10MG',
                formaAdministracao: 'INTRAVENOSO'
            }, 
            {
                dose: '01',
                nome: 'VALSARTANA AMP 160MG',
                formaAdministracao: 'INTRAVENOSO'
            }
        ]

    },
    {
        numeroPrescricao: 'PRESC1-622',
        dataImpresao: moment().format("DD/MM/YYYY hh:mm:ss"),
        nomePaciente: 'PACIENTE TESTE 2',
        setor: 'ESPERA-PENDENCIAS ALTA MEDICA/C3-126-HUB',
        atendimento: 2450523,
        horario: '13:00',
        medicamentos: [
            {
                dose: '02',
                nome: 'AMLODIPINA AMP 5MG',
                formaAdministracao: 'VIA ORAL'
            }, 
            {
                dose: '01',
                nome: 'PARACETAMOL AMP 10MG',
                formaAdministracao: 'VIA ORAL'
            }
        ]

    }
]

export default prescricoes;