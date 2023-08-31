import { useState } from 'react'
import './../css/autor.css'

function Autor() {
  const [] = useState(0)

  return (
    <div className='body'>
      <div className='formulario'>
        <form>
          <div className='h1'>
            <h1>DENUNCIE A OCORRÊNCIA DE VIOLÊNCIA CONTRA A MULHER</h1>
          </div>
          <div>
            <fieldset className='titAutor'>Sobre o autor do crime</fieldset>
            O ocorrido foi efetuado por mais de um agressor? <select name="" id="">
              <option value="yes">Sim</option>
              <option value="no">Não</option>
            </select>
            <br /><br />
            Nome do agressor: <input type="text" />
            <br /><br />
            Apelido do agressor: <input type="text" />
            <br /><br />
           Idade do agressor: <input type="number" name="" id="" />
           <br /><br />
            O agressor mora na mesma residência que a vítima?
            <select name="" id="">
             <option value=""></option>
             <option value="yes">Sim</option>
             <option value="no">Não</option>
            </select>
            <br /><br />
            Endereço de moradia do agressor: <input type="text" />
            <br />
            Ponto de referência/Características: <input type="text" />
            <br /><br />
            Local de trabalho do agressor; <input type="text" />
            <br /><br />
            Existe algum relacionamento do agressor com a vítima?
            <select name="" id="">
              <option value=""></option>
              <option value="yes">Sim</option>
              <option value="no">Não</option>
            </select>
            <br />
            Se sim, qual? <input type="text" list='relacionamento'/>
              <datalist id='relacionamento'>
                <option value="Amigo"></option>
                <option value="Colega de trabalho"></option>
                <option value="Irmão"></option>
                <option value="Namorado"></option>
                <option value="Marido"></option>
              </datalist>
            <br /><br /><br /><br />
            <div className='provas'>
              <p>Selecionar arquivos - Use para enviar provas como fotos de marcas de agressão.</p>
              <input type="file" name="" className='file' />
            </div>
          </div>
        </form>
        <br />
      </div>
    </div>
  )
}

export default Autor;
