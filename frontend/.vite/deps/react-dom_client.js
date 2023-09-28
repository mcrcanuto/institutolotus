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
              <option value="Violência patrimonial(controle 