import { useState } from 'react'
import './css/denuncia.css'

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
              <option value="Violência física(espancamento, tortura e outros tipos de agressão física)"></option>
              <option value="Violência psicológica(ameaça, manipulação, ridicularização, humilhação...)"></option>
              <option value="Violência sexual(estupro, impedir uso de contraceptivos, forçar aborto...)"></option>
              <option value="Violência patrimonial(controle do dinheiro, furto, extorsão, estelionato...)"></option>
              <option value="Violência moral(acusar de traição, fazer críticas falsas, expor vida íntima...)"></option>
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
        <button>Limpar</button> <button>Avançar</button>
      </div>
      <br />
    </div>
  )
}

export default App
