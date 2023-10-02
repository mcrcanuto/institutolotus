import React, { useEffect, useState } from "react";
import Footer from "../components/menus/footer";
import Menu from "../components/menus/Menu";
import Submenu from "../components/menus/submenu";
import "./../css/status.css"
import { useParams } from "react-router-dom";
import axios from "axios";
import dateDisplayer from "../components/codigos/dataDisplayer";


function Status() {
  const { protocolo } = useParams();
  const [denuncia, setDenuncia] = useState([]);
  const [comentarios, setComentarios] = useState([]);

  async function getDenuncia() {
    await axios.get(`http://localhost:3344/denuncia/protocolo/${protocolo}`).then((res) => {
      setDenuncia(res.data);
    }).catch((error) => {
      console.log(error);
    })  
  }

  async function getComentarios() {
    await axios.get(`http://localhost:3344/acompanhamento/denuncia/${protocolo}`).then((res) => {
      let sorted = res.data.sort(function(a, b) {
        return b.aco_data - a.aco_data;
    })
    setComentarios(sorted);
    }).catch((error) => {
      console.log(error);
    });
  }

  const renderComentarios = comentarios.map(item => {
    return <div id="divcomentario" key={item.aco_id}>

    <p id="tipocoment">{item.aco_status}</p>
    <p id="data">{dateDisplayer(item.aco_data)}</p>
   
    <p id="coment">
      {item.aco_comentario}
    </p>
    </div>
  })


  useEffect(() => {
    if(protocolo) {
      getDenuncia();
      getComentarios();
    } 
  }, [protocolo]);

  return (


    <>
      <React.Fragment>
        <Menu />
        <Submenu />
      </React.Fragment>


      <div className="Containeracompanhamento">
        <div className="containeracompanhamento">
          <div className="wrapacompanhamento">
            <h2 className='h2acompanhamento'>Denúncia: {denuncia.den_protocolo || ""}</h2>
            <h2 id='statusacompa'>status: {denuncia.den_status || ""}</h2>
            <br />
            <ol className="progress" data-steps="4">
              <li className="done">
                <span className="name">Enviada</span>
                <span className="step"><span>1</span></span>
              </li>
              <li className={(denuncia.den_status == "Visualizada") ? "active" : "done" }>
                <span className="name">Visualizada</span>
                <span className="step"><span>2</span></span>
              </li>
               <li className={(denuncia.den_status == "Investigação") ? "active" : "done" }>
                <span className="name">Investigação</span>
                <span className="step"><span>3</span></span>
              </li>
              <li className={(denuncia.den_status == "Finalizada") ? "done" : "active" }>
                <span className="name">Finalizada</span>
                <span className="step"><span>4</span></span>
              </li>
            </ol>
            <br /><br /><br /><br />
            <div className='comente'>
              <fieldset>
                {renderComentarios}
              </fieldset>
            </div>

          </div>
        </div>
      </div>

      <React.Fragment>
        <Footer />
      </React.Fragment>

    </>




  )
}


export default Status;