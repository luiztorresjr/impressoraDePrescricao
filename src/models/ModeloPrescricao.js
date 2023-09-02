import QRCode from 'qrcode';
import pdf from 'html-pdf';

class ModeloPrescricao{

    static preencherPrescricao(prescricao) {
        var medicamento = "";
        var i = 0;
        prescricao.medicamentos.forEach(f => {
            medicamento = medicamento + `
            <font size="${--i}">${f.dose} x ${f.nome}<br/>${f.formaAdministracao}<br/></font size>
            `;
            });  
    
        var qrCode = QRCode.toString(prescricao.numeroPrescricao, {
            errorCorrectionLevel: 'H',
            type: 'svg',
            width: 10
          }, function(err, data) {
            if (err) throw err;
            return data;
          });

        var conteudo = 
        `
        <div>
            <div style="text-align: center;">
                <div style="height:50%;width:50%; margin-left:25%; margin-bottom: -10%;">
                ${ qrCode }
                </div>
                    <b>Prescrição nº ${prescricao.numeroPrescricao}</b>
                <br/>
                ${prescricao.dataImpresao}
            </div>
            <div style="margin-right: 1cm; margin-left: 0.2cm;">
                <p>
                    <b>Paciente:</b> ${prescricao.nomePaciente}
                    <br/>
                    <b>Setor/Leito:</b> ${prescricao.setor}                
                    <br/>
                    <b>Atendimento:</b> ${prescricao.atendimento}
                </p>
                <p><b>Horario: </b>${prescricao.horario}hrs</p>
                <hr/>  
                ${medicamento}
            </div>
        </div>`;      
          return conteudo;
    }    

    
    static imprimirPrescricao(prescricao){
        var conteudo = this.preencherPrescricao(prescricao)
        var options = { format: 'A6' };
        pdf.create(conteudo, options).toFile(`./output/precricao_${prescricao.numeroPrescricao}.pdf`, function(err, res) {
            if (err) return console.log(err);
            console.log(res); 
            return
          });
    
          
    }  

}

export default ModeloPrescricao;
