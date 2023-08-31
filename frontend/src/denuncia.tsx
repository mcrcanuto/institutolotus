import { useState } from 'react'
import './css/denuncia.css'

function Denuncia() {
  const [] = useState(0)

  const handleSubmit = (e:SubmitEvent) => {
    
  }

  return (
    <div className="Container">
    <div className="container-login">
    <div className="wrap-login">
    <form className="login-form">
        <div className='login-form-title'>
          <h1>DENUNCIE A OCORRÊNCIA DE VIOLÊNCIA CONTRA A MULHER</h1>
        </div>
        <div className='crime'>
          <fieldset className='login-form-title11'>Sobre o Crime</fieldset>
          <br />
          <div className='wrap-input'>
          <div className="wrap-input">
            <input className='input' type="text" required list='denunciante'/>
            <span className="focus-input" data-placeholder="Como denunciante, eu sou..."></span>
            <datalist id='denunciante'>
              <option className='tipoDenunciante' value="Vítima"></option>
              <option className='tipoDenunciante' value="Testemunha"></option>
            </datalist>
            </div>
            <div className="wrap-input">
            <input className='input' type="text" required list='violencia'/>
            <span className="focus-input" data-placeholder="Tipos de violência"></span>
            <datalist id='violencia'>
              <option className='tipoViolencia' value="Violência física (espancamento, tortura e outros tipos de agressão física)"></option>
              <option className='tipoViolencia' value="Violência psicológica (ameaça, manipulação, ridicularização, humilhação...)"></option>
              <option className='tipoViolencia' value="Violência sexual (estupro, impedir uso de contraceptivos, forçar aborto...)"></option>
              <option className='tipoViolencia' value="Violência patrimonial (controle do dinheiro, furto, extorsão, estelionato...)"></option>
              <option className='tipoViolencia' value="Violência moral (acusar de traição, fazer críticas falsas, expor vida íntima...)"></option>
            </datalist>
            </div>
            <div className="wrap-input">
            <input className='input' type="text" required list='frequencia'/>
            <span className="focus-input" data-placeholder="Frequência do ocorrido"></span> 
            <datalist id="frequencia">
              <option>Diariamente</option>
              <option>Toda semana</option>
              <option>Todo mês</option>
              <option>Apenas uma vez</option>
            </datalist>
            </div>
            <div className="wrap-input">
            <p className='text'>Data da Ocorrência: </p>   <input className='input' type="date" required />
            </div>
            <div className='wrap-input'>
            <p className='text'>Hora da Ocorrência: </p> <input className='input' type='time' required />
            </div>
            <div className="wrap-input">
            <textarea className='input' required />
            <span className="focus-input" data-placeholder="Descrição do ocorrido"></span>
            </div>
          </div>
          <br />
          <fieldset className='login-form-title1'>Sobre o Local</fieldset>
          <br /> 
          <div>
          <div className="wrap-input">
          <input className='input' type="text" required />
          <span className="focus-input" data-placeholder="Bairro"></span>
          </div>
          
          <div className="wrap-input">
          <input className='input' type="text" required />
          <span className="focus-input" data-placeholder="Digite seu CEP"></span>
          <br />
          <input type="checkbox" name="" />
          <p className='text'>Não sei meu CEP</p>
          </div>
          <div className="wrap-input">
          <input className='input' type="text" required />
          <span className="focus-input" data-placeholder="Descrição do Local"></span>
          </div>
          <div className="wrap-input">
          <input className='input' type="text" required />
          <span className="focus-input" data-placeholder="Ponto de Referência"></span>
          </div>
          </div>
          <br />
          <fieldset className='login-form-title1'>Sobre o Agressor</fieldset>
          <br /> 
          <div className="wrap-input">
            <input className='input' type="text" required list='qntAgr'/>
            <span className="focus-input" data-placeholder="O ocorrido foi efetuado por mais de um agressor?"></span> 
            <datalist id="qntAgr">
              <option>Sim</option>
              <option>Não</option>
            </datalist>
            </div>
            <div className="wrap-input">
          <input className='input' type="number" required />
          <span className="focus-input" data-placeholder="Se sim, quantos?"></span>
          </div>
          <div className="wrap-input">
          <input className='input' type="text" required />
          <span className="focus-input" data-placeholder="Nome do Agressor"></span>
          </div>
          <div className="wrap-input">
          <input className='input' type="text" required />
          <span className="focus-input" data-placeholder="Apelido do Agressor"></span>
          </div>
          <div className="wrap-input">
          <input className='input' type="number" required />
          <span className="focus-input" data-placeholder="Idade do Agressor"></span>
          </div>
          <div className="wrap-input">
            <input className='input' type="text" required list='locAgr'/>
            <span className="focus-input" data-placeholder="O agressor mora na mesma residência que a vítima?"></span> 
            <datalist id="locAgr">
              <option>Sim</option>
              <option>Não</option>
            </datalist>
            </div>
          <div className="wrap-input">
          <input className='input' type="text" required />
          <span className="focus-input" data-placeholder="Se a resposta for não, qual o endereço do agressor?"></span>
          </div>
          <div className="wrap-input">
          <input className='input' type="text" required />
          <span className="focus-input" data-placeholder="Ponto de referência/Características"></span>
          </div>
          <div className="wrap-input">
          <input className='input' type="text" required />
          <span className="focus-input" data-placeholder="Local de trabalho do agressor"></span>
          </div>
          <div className="wrap-input">
            <input className='input' type="text" required list='relAgr'/>
            <span className="focus-input" data-placeholder="O agressor tem algum tipo de relacionamento com a vítima?"></span> 
            <datalist id="relAgr">
              <option>Sim</option>
              <option>Não</option>
            </datalist>
            </div>
            <div className="wrap-input">
            <input className='input' type="text" required list='sitAgr'/>
            <span className="focus-input" data-placeholder="Se sim, qual?"></span> 
            <datalist id="sitAgr">
              <option value="Colega de trabalho"></option>
              <option value="Amigo"></option>
              <option value="Irmão"></option>
              <option value="Namorado"></option>
              <option value="Marido"></option>
              <option value="Parente"></option>
            </datalist>
            </div>
          <div className="wrap-input1">
          <p className='text'> Selecionar arquivos - Use para enviar provas como fotos de marcas de agressão.</p>
          <br />
          <input className='input1' type="file" required />
          <span className="focus-input" data-placeholder=""></span> <br /><br />
          </div>
        </div>
     
      <div className='container-login-form-btn'>
        <button type='reset' className="login-form-btn2">Limpar</button>
        <br /><br />
        <button type='submit' className="login-form-btn">Enviar</button>
      </div>
      <br />
      </form>
    </div>
    </div>
    </div>
  )
}

export default Denuncia;
