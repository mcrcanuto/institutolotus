import { useState } from 'react'
import './../css/denuncia.css'

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
            <input className='input' type="text" placeholder="Como denunciante, eu sou..." required list='denunciante'/>
            <span className="focus-input"></span>
            <datalist id='denunciante'>
              <option className='tipoDenunciante' value="Vítima"></option>
              <option className='tipoDenunciante' value="Testemunha"></option>
            </datalist>
            </div>
            <div className="wrap-input">
            <input className='input' type="text" placeholder="Tipos de violência" required list='violencia'/>
            <span className="focus-input"></span>
            <datalist id='violencia'>
              <option className='tipoViolencia' value="Violência física (espancamento, tortura e outros tipos de agressão física)"></option>
              <option className='tipoViolencia' value="Violência psicológica (ameaça, manipulação, ridicularização, humilhação...)"></option>
              <option className='tipoViolencia' value="Violência sexual (estupro, impedir uso de contraceptivos, forçar aborto...)"></option>
              <option className='tipoViolencia' value="Violência patrimonial (controle do dinheiro, furto, extorsão, estelionato...)"></option>
              <option className='tipoViolencia' value="Violência moral (acusar de traição, fazer críticas falsas, expor vida íntima...)"></option>
            </datalist>
            </div>
            <div className="wrap-input">
            <input className='input' type="text" placeholder="Frequência do ocorrido" required list='frequencia'/>
            <span className="focus-input"></span> 
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
            <textarea className='input' placeholder="Descrição do ocorrido" required />
            <span className="focus-input"></span>
            </div>
          </div>
          <br />
          <fieldset className='login-form-title1'>Sobre o Local</fieldset>
          <br /> 
          <div>
          <div className="wrap-input">
          <input className='input' type="text" placeholder="Bairro" required />
          <span className="focus-input"></span>
          </div>
          
          <div className="wrap-input">
          <input className='input' type="text" placeholder="Digite seu CEP" required />
          <span className="focus-input"></span>
          <br />
          <p className='text'><input type="checkbox" name="" />Não sei meu CEP</p>
          </div>
          <div className="wrap-input">
          <input className='input' type="text" placeholder="Descrição do Local" required />
          <span className="focus-input"></span>
          </div>
          <div className="wrap-input">
          <input className='input' type="text" placeholder="Ponto de Referência" required />
          <span className="focus-input"></span>
          </div>
          </div>
          <br />
          <fieldset className='login-form-title1'>Sobre o Agressor</fieldset>
          <br /> 
          <div className="wrap-input">
            <input className='input' type="text" placeholder="O ocorrido foi efetuado por mais de um agressor?" required list='qntAgr'/>
            <span className="focus-input"></span> 
            <datalist id="qntAgr">
              <option>Sim</option>
              <option>Não</option>
            </datalist>
            </div>
            <div className="wrap-input">
          <input className='input' type="number" placeholder="Se sim, quantos?" required />
          <span className="focus-input"></span>
          </div>
          <div className="wrap-input">
          <input className='input' type="text" placeholder="Nome do Agressor" required />
          <span className="focus-input"></span>
          </div>
          <div className="wrap-input">
          <input className='input' type="text" placeholder="Apelido do Agressor" required />
          <span className="focus-input"></span>
          </div>
          <div className="wrap-input">
          <input className='input' type="number" placeholder="Idade do Agressor" required />
          <span className="focus-input"></span>
          </div>
          <div className="wrap-input">
            <input className='input' type="text" placeholder="O agressor mora na mesma residência que a vítima?" required list='locAgr'/>
            <span className="focus-input"></span> 
            <datalist id="locAgr">
              <option>Sim</option>
              <option>Não</option>
            </datalist>
            </div>
          <div className="wrap-input">
          <input className='input' placeholder="Se a resposta for não, qual o endereço do agressor?" type="text" required />
          <span className="focus-input"></span>
          </div>
          <div className="wrap-input">
          <input className='input' placeholder="Ponto de referência/Características" type="text" required />
          <span className="focus-input"></span>
          </div>
          <div className="wrap-input">
          <input className='input' placeholder="Local de trabalho do agressor" type="text" required />
          <span className="focus-input"></span>
          </div>
          <div className="wrap-input">
            <input className='input' type="text" placeholder="O agressor tem algum tipo de relacionamento com a vítima?" required list='relAgr'/>
            <span className="focus-input"></span> 
            <datalist id="relAgr">
              <option>Sim</option>
              <option>Não</option>
            </datalist>
            </div>
            <div className="wrap-input">
            <input className='input' type="text" placeholder="Se sim, qual?" required list='sitAgr'/>
            <span className="focus-input"></span> 
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
          <input className='input1' type="file" />
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
