import { useState } from 'react'
import './App.css'

function App() {
  const [] = useState(0)

  const handleSubmit = (e:SubmitEvent) => {
    
  }

  return (
    <div className="Container2">
    <div className="container-prot">
    <div className="wrap-prot">
      <h3>Insira aqui o protocolo da sua denúncia para conferir as atualizações</h3>
      <input type="text" id='text' />
      <br /><br />
      <button>PROCURAR</button>
    </div>
    </div>
    </div>
  )
}

export default App
