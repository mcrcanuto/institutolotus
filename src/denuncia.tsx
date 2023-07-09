import { useState } from 'react'
import './css/denuncia.css'
import "./css/geral.css"


function App() {
  const [] = useState(0)

  return (
    <div className='formulario'>
      <form>
        <div className='h1'>
          <h1>DENUNCIE A OCORRÊNCIA DE VIOLÊNCIA CONTRA A MULHER</h1>
        </div>
        <div className='crime'>
          <fieldset className='titCrime'>Sobre o crime</fieldset>
          <div className='label'>
            RG do denunciante: <input type="text" />
            <br /><br />
            Tipo de violência: <input type="text" list='violencia'/>
            <datalist id='violencia'>
              <option value="panelada no coco"></option>
              <option value="passar de carro por cima"></option>
              <option value="tacou fogo e saiu correndo"></option>
              <option value="tacou balde de agua com gelo"></option>
              <option value="falou pra lavar vasilha"></option>
            </datalist>
            <br /><br />
            Frequência do ocorrido: <select name="" id="frequencia">
              <option value=""></option>
              <option>Muitas vezes ao dia todos os dias</option>
              <option>Poucas vezes ao dia todos os dias</option>
              <option>Muitas vezes ao dia dependendo do dia</option>
              <option>Poucas vezes ao dia dependendo do dia</option>
              <option>Algumas vezes por semana</option>
              <option>Algumas vezes por mês</option>
            </select>
            <br /><br />
            Data da ocorrência: <input type="date" />
            <br /><br />
            Hora da ocorrência: <input type='time' />
            <br /><br />
            <p className='descCaso'>Descrição do ocorrido:</p><input type='text' className='texto' />
            <br />
          </div>
          <br />
          <fieldset className='titLocal'>Sobre o Local</fieldset>
          <div className='label'>
            Bairro: <input type="text" />
            <br />
            CEP: <input type="text" placeholder='XXXXX-XXX'/><br />
            <input type="checkbox" name="" id="" />Não sei meu CEP
            <br /><br />
            Descrição do local: <input type="text" />
            <br /><br />
            Ponto de Referência: <input type="text" />
          </div>
        </div>
      </form>
      <br />
      <br />
      <div className='botoes'>
        <input className='voltar' type="reset" value="Voltar" />
        <input className='avancar' type="button" value="Avançar" />
      </div>
    </div>


  )
}

export default App
